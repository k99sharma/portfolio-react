// importing components
import CopyTextBlock from "../components/CopyTextBlock/CopyTextBlock.js";
import Divider from "../components/Divider/Divider.jsx";
import { useContext } from "react";

// importing theme context
import ThemeContext from "../context/ThemeContext.js";

// about component
export default function About() {
  // theme context
  const themeCtx = useContext(ThemeContext);
  const { theme } = themeCtx;

  return (
    <div className="about">
      <div
        className={`about__header font-bold heading text-xl ${
          theme === "dark" ? "text-amber-500" : "text-cyan-700"
        }`}
      >
        ABOUT ME
      </div>

      <div className="about__image my-5 flex items-center justify-center">
        <img
          width={200}
          height={200}
          className="rounded-full"
          src="/assets/kalash.jpg"
          alt="kalash sharma"
        />
      </div>

      <div className={`about__text ${theme === "dark" ? "text-zinc-200" : ""}`}>
        ahhhhhhhhhhhhhhhhhh don't know yet!
      </div>

      <Divider />

      <div className="about__cta">
        <div
          className={`about__cta__header font-bold heading mb-5 text-lg ${
            theme === "dark" ? "text-amber-500" : "text-cyan-700"
          }`}
        >
          GET IN TOUCH
        </div>

        <div
          className={`about__cta__text ${
            theme === "dark" ? "text-zinc-200" : ""
          }`}
        >
          I'd love to hear from you! Whether you have a project in mind, a
          question, or just want to say hello, feel free to reach out. I'm
          always open to new opportunities and collaborations.
        </div>

        <div className="about__cta__mail mt-10">
          <CopyTextBlock text="kalash.strt@gmail.com" />
        </div>
      </div>

      <Divider />
    </div>
  );
}
