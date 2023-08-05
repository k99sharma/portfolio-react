import { Link } from "react-router-dom";

// cta component
export default function CTA() {
  return (
    <div className="cta flex flex-col md:flex-row bg-primary items-center justify-around text-center text-neutral-1 w-5/6 px-5 py-10 rounded-lg">
      <div className="cta__heading font-bold text-2xl">Get In Touch</div>

      <div className="cta__subheading text-md my-5">
        Message me if you have any work <br /> opportunities or a 'cool' project
        idea!
      </div>

      <div className="cta__button">
        <button
          className="border-neutral-1 border-2 hover:bg-neutral-1 hover:text-neutral-0 px-10 py-3 rounded-3xl"
          type="button"
          role="navigation"
          aria-label="cta"
        >
          <Link to="/contact">Let's do this</Link>
        </button>
      </div>
    </div>
  );
}
