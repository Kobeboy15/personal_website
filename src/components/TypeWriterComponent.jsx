import Typewriter from "typewriter-effect";

export default function TypeWriterComponent() {
  return (
    <div className=" text-2xl font-semibold">
      <Typewriter
        options={{
          strings: [
            "Web Designer",
            "UI/UX Engineer",
            "Frontend Developer",
            "Software Engineer ",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: "50",
        }}
      />
    </div>
  );
}
