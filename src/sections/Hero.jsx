import { words } from "../constants/index";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="Background" />
      </div>

      <div className="hero-layout">
        {/* Left: Hero Content */}
        {/* <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping{" "}
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Ankit Kumar, a developer based in India with a passion for
              code
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header> */}

        {/* Left: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-5">
            {/* Hero Headline */}
            <div className="hero-text">
              <h1 className="text-[2rem] md:text-[3.5rem] font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary font-semibold">Ankit Kumar</span>
              </h1>
              <p className="text-white-50 text-base md:text-xl mt-1">
                MERN Stack Developer & DSA Enthusiast
              </p>
            </div>

            {/* Animated Word Section */}
            <div className="hero-text">
              <h2 className="text-[1.6rem] md:text-[2.5rem] font-semibold leading-snug">
                Shaping{" "}
                <span className="slide inline-block align-middle h-[2.8rem] md:h-[3rem] overflow-hidden relative">
                  <span className="wrapper block transition-transform duration-500 ease-in-out will-change-transform">
                    {words.map((word, index) => (
                      <span
                        key={word.text + index}
                        className="flex items-center md:gap-3 gap-1 h-[2.8rem] md:h-[3rem]"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-10 md:size-8 size-6 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-base md:text-2xl">
                          {word.text}
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </h2>
              <h2 className="text-[1.6rem] md:text-[2.5rem] font-semibold">
                into Real Projects
              </h2>
              <h2 className="text-[1.6rem] md:text-[2.5rem] font-semibold">
                that Deliver Results
              </h2>
            </div>

            {/* Subheading */}
            <p className="text-white-50 md:text-base text-sm relative z-10 pointer-events-none max-w-xl">
              I build full-stack apps using <strong>React</strong>,{" "}
              <strong>Node.js</strong>, and <strong>MongoDB</strong>. With 220+
              DSA problems solved and 6+ deployed projects, I'm ready to
              contribute to real-world software teams.
            </p>

            {/* CTA Buttons */}

            <div className="flex flex-col md:flex-row gap-4 mt-4 w-full md:w-auto">
              <Button
                text="📄 View Resume"
                className="w-full md:w-60"
                href="https://shorturl.at/5KQk9"
              />
              <Button
                text="💬 Let's Connect"
                className="w-full md:w-60"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </header>

        {/* Right: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
