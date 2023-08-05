// imports
import { useState } from "react";

// go to top button component
export default function GoToTopButton() {
  const [show, handleShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  });

  return (
    <div className="goToTopButton">
      <button
        className={`bg-primary rounded-full fixed mt-5 mr-5 right-0 ${
          show ? "block" : "hidden"
        }`}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img className="h-10 w-10 p-2" src="/assets/arrow.svg" alt="up arrow" />
      </button>
    </div>
  );
}
