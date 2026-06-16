"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

/**
 * Very low-contrast, slowly drifting tonal field rendered behind all content.
 * Rendered at a deliberately low resolution (it's a soft gradient — extra pixels
 * are invisible) and throttled to ~30fps to keep GPU cost negligible.
 */
const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision mediump float;
  varying vec2 vUv;
  uniform float uTime;
  uniform float uAspect;
  uniform vec3 uPaper;
  uniform vec3 uShade;
  uniform vec3 uAccent;

  vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
    vec2 i=floor(v+dot(v,C.yy));
    vec2 x0=v-i+dot(i,C.xx);
    vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
    vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i1;
    i=mod289(i);
    vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
    vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
    m=m*m; m=m*m;
    vec3 x=2.0*fract(p*C.www)-1.0;
    vec3 h=abs(x)-0.5;
    vec3 ox=floor(x+0.5);
    vec3 a0=x-ox;
    m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
    vec3 g;
    g.x=a0.x*x0.x+h.x*x0.y;
    g.yz=a0.yz*x12.xz+h.yz*x12.yw;
    return 130.0*dot(m,g);
  }
  // 3-octave fbm
  float fbm(vec2 p){
    float v=0.0, a=0.5;
    for(int i=0;i<3;i++){ v+=a*snoise(p); p*=2.0; a*=0.5; }
    return v;
  }

  void main(){
    vec2 uv=vUv; uv.x*=uAspect;
    float t=uTime*0.02;
    float n=fbm(uv*1.1+vec2(t,t*0.6))*0.5+0.5;

    // base tonal drift within the paper range
    vec3 col=mix(uPaper,uShade,smoothstep(0.4,0.8,n)*0.55);

    // faint accent glow derived from the same field (no extra noise eval)
    float glow=smoothstep(0.62,1.0,n);
    col=mix(col,uAccent,glow*0.045);

    gl_FragColor=vec4(col,1.0);
  }
`;

const BackdropMaterial = shaderMaterial(
  {
    uTime: 0,
    uAspect: 1,
    uPaper: new THREE.Color("#F4F2ED"),
    uShade: new THREE.Color("#E4E0D5"),
    uAccent: new THREE.Color("#1F44FF"),
  },
  vertex,
  fragment,
);
extend({ BackdropMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      backdropMaterial: JSX.IntrinsicElements["shaderMaterial"] & {
        uTime?: number;
        uAspect?: number;
        uPaper?: THREE.Color;
        uShade?: THREE.Color;
        uAccent?: THREE.Color;
      };
    }
  }
}

function Plane() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  // Runs once per rendered frame (driven on-demand at ~30fps by Heartbeat).
  useFrame((_, delta) => {
    const m = matRef.current;
    if (!m) return;
    m.uniforms.uTime.value += delta;
    m.uniforms.uAspect.value = viewport.width / viewport.height;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <backdropMaterial ref={matRef} />
    </mesh>
  );
}

/**
 * Requests a render at ~30fps while the tab is visible. With frameloop="demand"
 * the scene only draws when invalidate() is called, so this caps GPU work.
 */
function Heartbeat() {
  const { invalidate } = useThree();
  useEffect(() => {
    let raf = 0;
    let last = 0;
    const interval = 1000 / 30;
    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (document.hidden || now - last < interval) return;
      last = now;
      invalidate();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [invalidate]);
  return null;
}

export default function BackdropScene({ dpr = 0.6 }: { dpr?: number }) {
  return (
    <Canvas
      frameloop="demand"
      dpr={dpr}
      resize={{ debounce: 200 }}
      gl={{
        antialias: false,
        alpha: false,
        depth: false,
        stencil: false,
        powerPreference: "low-power",
      }}
      style={{ width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <Heartbeat />
      <Plane />
    </Canvas>
  );
}
