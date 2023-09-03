// imports
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";

// contact page
export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      alert("Success for message!");
      setSuccess(true);
    }
  }, []);

  return (
    <>
      {success ? <div className="success-message">Sucess</div> : null}

      <div className="flex flex-col items-center justify-center">
        <div className="contact w-4/5">
          <div className="contact__header mb-12">
            <div className="contact__header__heading text-2xl font-bold mb-3 text-primary">
              Love to hear from you, <br />
              Get in touch
            </div>

            <div className="contact__header__subheading text-lg">
              Easiest way to contact me,{" "}
              <span className="text-primary underline underline-offset-2">
                <a href="mailto:kalash.strt@gmail.com">mail me!</a>
              </span>
            </div>
          </div>

          <form
            action="/"
            autoComplete="off"
            name="contact"
            data-netlify="true"
            method="POST"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-5">
              <div className="mb-5">
                <div className="form__label mb-3 font-semibold">Your Name</div>

                <div className="form__input">
                  <TextField
                    name="name"
                    type="text"
                    placeholder="jon doe"
                    required
                    aria-label="your name"
                  />
                </div>
              </div>

              <div className="mb-5">
                <div className="form__label mb-3 font-semibold">Your Email</div>

                <div className="form__input">
                  <TextField
                    name="email"
                    type="email"
                    placeholder="jondoe@email.com"
                    aria-label="your email"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-10">
              <div className="form__label mb-3 font-semibold">Message</div>

              <div className="form__input">
                <TextField
                  className="w-3/5 md:w-2/5 lg:w-2/5"
                  multiline
                  rows={5}
                  placeholder="Your Message ..."
                  aria-label="your message"
                  required
                />
              </div>
            </div>

            <button
              className="bg-neutral-1 text-neutral-0 h-12 w-44 rounded-lg hover:shadow-lg"
              role="button"
              type="submit"
              aria-label="form submit button"
            >
              Just Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
