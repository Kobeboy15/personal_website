import Typewriter from "typewriter-effect";

export default function TypeWriterComponent() {
  return (
    <div>
      <p>You can call me a:</p>
      <span className="text-3xl font-semibold">
        <Typewriter
          options={{
            strings: [
              "Web Designer",
              "UI/UX Engineer",
              "Frontend Developer",
              "Software Engineer",
            ],
            delay: "90",
            autoStart: true,
            loop: true,
            deleteSpeed: "50",
          }}
        />
      </span>
    </div>
  );
}
