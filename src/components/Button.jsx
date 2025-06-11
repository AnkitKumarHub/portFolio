// const Button = ({ text, className, id }) => {
//   return (
//     <a
//       onClick={(e) => {
//         e.preventDefault();
//         const target = document.getElementById("counter");
//         if (target && id) {
//           const offset = window.innerHeight * 0.15;

//           const top =
//             target.getBoundingClientRect().top + window.scrollY - offset;
//           window.scrollTo({
//             top: top,
//             behavior: "smooth",
//           });
//         }
//       }}
//       className={`${className ?? ""} cta-wrapper `}
//     >
//       <div className="cta-button group">
//         <div className="bg-circle" />
//         <p className="text">{text}</p>
//         <div className="arrow-wrapper">
//           <img src="/images/arrow-down.svg" alt="arrow" />
//         </div>
//       </div>
//     </a>
//   );
// };

// export default Button;


import React from "react";

const Button = ({
  text,
  className = "",
  onClick,
  href,
  icon,
  type = "button",
  ...props
}) => {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      type={href ? undefined : type}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3
        rounded-full
        border border-white-50
        bg-gradient-to-tr from-black-100 to-black-200
        text-white font-semibold
        shadow-md
        transition-all duration-200
        hover:scale-105 hover:shadow-lg hover:border-primary hover:text-primary
        focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
        active:scale-100
        ${className}
      `}
      style={{
        minWidth: 0,
        fontSize: "1rem",
        letterSpacing: "0.01em",
      }}
      {...props}
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span>{text}</span>
    </Comp>
  );
};

export default Button;