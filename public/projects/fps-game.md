A browser-native first-person shooter built entirely on Three.js and TypeScript — no game engine, no physics library, just a renderer and the math underneath it.

The goal was to understand what a game engine actually does by building one. At ~14,700 lines of code across a proper entity/system split, it ended up being the most architecturally deliberate project I've worked on outside of a production codebase.

## Engine architecture

The core is an entity-component system: entities are plain IDs, components are typed data bags, and systems query for entities that have the components they care about each tick. This keeps logic decoupled — the collision system doesn't know about rendering, the AI system doesn't know about physics — and makes the tick loop composable.

```
World
 ├── EntityManager   — create/destroy, component attach/detach
 ├── SystemManager   — ordered system registration + tick
 └── EventBus        — typed events between systems (damage, death, pickup)
```

The renderer wraps Three.js's `WebGLRenderer` with a scene graph that mirrors the entity tree. Renderables are components like everything else; the render system syncs mesh transforms from the physics state each frame.

## Movement and collision

Player movement uses a kinematic character controller rather than a rigid body — smoother feel, predictable behavior on stairs and slopes. Collision detection is a two-phase approach: broad-phase AABB sweep to reject obvious misses, then narrow-phase GJK for the handful of candidates that survive.

The weapon system runs raycasts against the scene's BVH (Three.js's `MeshBVH` accelerated by `three-mesh-bvh`) so hit detection is frame-accurate at any framerate.

## Performance

Performance is managed through entity caps and object pooling rather than a fixed frame budget. Active entities are capped at **24 soft / 28 hard** (per enemy variant: 30/9/4), with object pooling for enemies and pickups so deactivated instances are removed from the scene graph rather than destroyed. Live **FPS and draw-call instrumentation** samples every 250ms, and stress-test hooks allow pushing to 48–60 entities for profiling.

The project spans **68 TypeScript files and 14,695 lines of code** across a clean engine/entity/systems split, with Three.js isolated into its own vendor chunk.

## Testing

This was the first project where I treated testing as a first-class constraint from the start:

- **Vitest** for unit tests on the engine systems (ECS queries, collision math, weapon damage calculations) — fast enough to run on every file save
- **Playwright** for integration tests that actually spin up the browser, load the game, and assert on visual state — verifies that the WebGL canvas renders and that the player can move without the test suite knowing anything about the internals

## Stack

`TypeScript` `Three.js` `Vite` `Vitest` `Playwright` `three-mesh-bvh`
