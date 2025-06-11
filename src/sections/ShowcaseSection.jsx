import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    // Animate the first project with a fade-in effect
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 }, // from state
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1), // stagger effect
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100", // when the top of the card reaches 80% of the viewport height
            toggleActions: "play none none reverse", // play on enter, reverse on leave
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current, // applied to this section
      { opacity: 0 }, //from state
      { opacity: 1, duration: 1.5 } // to state
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" className="w-full h-full"/>
            </div>
            <div className="text-content">
              <h2>
                On- demanad rides made simple with a powerful, User friendly app
                callled ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                {" "}
                An App built with react native, Expo $ TailwindCSS foe a fast,
                User-Friwndly experience.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            {/* 1st Secondary Project */}
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb] p-4 flex items-center justify-center rounded-xl">
                <img
                  src="/images/project2.png"
                  alt="Library Management Platform"
                  className="w-auto "
                />
              </div>
              <h2>Library Management Platform</h2>
            </div>

            {/* 2nd Secondary Project */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#e5e7eb]  p-4 flex items-center justify-center rounded-xl">
                <img src="/images/project3.png" alt="YC Directory" className="w-auto" />
              </div>
              <h2>YC Directory- A StartUp shocase app</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
