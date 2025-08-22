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
  const tags1Ref = useRef(null);
  const buttons1Ref = useRef(null);
  const tags2Ref = useRef(null);
  const buttons2Ref = useRef(null);
  const tags3Ref = useRef(null);
  const buttons3Ref = useRef(null);

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
          delay: 0.2 * (index + 1), // stagger effect
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

    gsap.fromTo(
      [tags1Ref.current, buttons1Ref.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: project1Ref.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      [tags2Ref.current, buttons2Ref.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: project2Ref.current,
          start: "top 80%",
        },
      }
    );
    // Animate tags and buttons for project 3
    gsap.fromTo(
      [tags3Ref.current, buttons3Ref.current],
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: project3Ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          {/* <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img
                src="/images/project1.png"
                alt="Ryde"
                className="w-full h-full"
              />
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
          </div> */}
          <div className="first-project-wrapper" ref={project1Ref}>
            {/* <div className="image-wrapper rounded-xl overflow-hidden relative w-full h-[300px] md:h-[500px]"> */}
            {/* <div className="image-wrapper bg-black p-4 flex items-center justify-center rounded-xl">
              <img
                src="/images/project1.png"
                alt="DevTinder"
                //           className="absolute inset-0 w-full h-full object-cover "
                //           style={{
                //   objectPosition: 'center',
                // }}
                className="w-full h-full object-contain rounded-xl"
              />
            </div> */}

            {/* updated one as of 22-08-2025*/}
            <div className="image-wrapper bg-[#f8f8f8] md:bg-transparent p-2 md:p-0 rounded-2xl">
              <img
                src="/images/project1.png"
                alt="DevTinder"
                className="w-full h-[300px] md:h-full object-contain md:object-cover rounded-xl"
              />
            </div>

            <div className="text-content mt-4">
              {/* Tags and Buttons Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                {/* Tags */}
                <div
                  ref={tags1Ref}
                  className="flex flex-wrap gap-2 text-sm font-semibold"
                >
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Express
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Socket.io
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Redux Toolkit
                  </span>
                </div>
                {/* Buttons */}
                <div ref={buttons1Ref} className="flex gap-2">
                  <a
                    href="https://dev-tinder-pied-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 hover:shadow transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3h7v7m0 0L10 21l-7-7L21 10z" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/AnkitKumarHub/DevTinder-UI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 hover:shadow transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              <h2 className="text-xl md:text-2xl font-bold leading-snug">
                DevTinder – Developer Networking & Collaboration Web App
              </h2>
              <p className="text-white-50 md:text-xl">
                A MERN stack-based platform that connects developers through
                interest-based matching, swipe functionality, and real-time
                chat. Users can create profiles, explore potential
                collaborators, and build connections for projects or learning.
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
                  className="w-auto"
                />
              </div>
              {/* Tags and Buttons Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                {/* Tags */}
                <div
                  ref={tags2Ref}
                  className="flex flex-wrap gap-2 text-sm font-semibold"
                >
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    EJS
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Node.js
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Express
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    MongoDB
                  </span>
                </div>
                {/* Buttons */}
                <div ref={buttons2Ref} className="flex gap-2">
                  <a
                    href="https://wander-lust-864t.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 hover:shadow transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3h7v7m0 0L10 21l-7-7L21 10z" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/AnkitKumarHub/Wander-lust"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 hover:shadow transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              {/* Heading Row */}
              <h2 className="mt-3 text-lg md:text-xl font-bold leading-snug">
                Wanderlust – Discover & Book Unique Stays
              </h2>
            </div>

            {/* 2nd Secondary Project */}
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#e5e7eb] p-4 flex items-center justify-center rounded-xl">
                <img
                  src="/images/project3.png"
                  alt="YC Directory"
                  className="w-auto"
                />
              </div>
              {/* Tags and Buttons Row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
                {/* Tags */}
                <div
                  ref={tags3Ref}
                  className="flex flex-wrap gap-2 text-sm font-semibold"
                >
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    React
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Firebase
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Framer Motion
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Tailwind CSS
                  </span>
                  {/* Add more tags as needed */}
                </div>
                {/* Buttons */}
                <div ref={buttons3Ref} className="flex gap-2">
                  <a
                    href="https://github.com/AnkitKumarHub/theMetaverseProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 hover:shadow transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 3h7v7m0 0L10 21l-7-7L21 10z" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/AnkitKumarHub/theMetaverseProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-100 hover:shadow transition"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
              {/* Heading Row */}
              <h2 className="mt-3 text-lg md:text-xl font-bold leading-snug">
                Metaverse Journal: Next-Gen Crypto & Web3 Publishing
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
