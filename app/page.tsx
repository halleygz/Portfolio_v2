import TypeWriter from "@/components/Animation/Typewriter";

export default function Home() {
  return (
    <div>
      <header className="mb-8">
        {/* <Heading content="Hey" /> */}
        <TypeWriter
          sentences={["Hey,", "Halle here"]}
          className="font-mono text-4xl lg:text-8xl font-thin"
        />
      </header>

      <p className="font-mono font-extralight text-xl sm:w-full lg:w-1/2">
        Or Halleluya Ephrem Mulugeta, more formally. Got into the world of prgramming accidently, in the name of fixing my crashed laptop. After fixing it and a bunch of loop holes later, I got my self in the world of building web apps. I'm now concentrating on building backend tools. Also love making front end heavy applications.
      </p>
    </div>
  );
}
