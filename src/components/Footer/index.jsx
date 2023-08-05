// importing components
import CTA from "../CTA";

// social links
const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/k99sharma",
    img: "/assets/github.png",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kalashsharma99/",
    img: "/assets/linkedin.png",
  },
  {
    label: "Mail",
    url: "mailto:kalash.strt@gmail.com",
    img: "/assets/gmail.png",
  },
  {
    label: "Hashnode",
    url: "https://kalashsharma.hashnode.dev/",
    img: "/assets/blog.png",
  },
];

// footer social links component
function FooterSocialLinks() {
  return (
    <div className="footerSocialLinks flex my-10">
      {socialLinks.map((link) => {
        return (
          <div key={link.label} className="footerSocialLinks__button mx-3">
            <a
              target="_blank"
              rel="noreferrer"
              href={link.url}
              aria-label={link.label}
            >
              <img width={30} height={30} src={link.img} alt={link.label} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

// footer component
export default function Footer() {
  return (
    <div className="mt-48">
      <div className="absolute w-full flex items-center justify-center -my-24">
        <CTA />
      </div>

      <div className="footer flex flex-col items-center justify-center text-neutral-0 bg-gradient-to-b from-bg-1 to-bg-0 py-12">
        <div className="footer__logo mt-40 md:mt-24 mb-10">
          <img width={50} height={50} src="/assets/logo.png" alt="logo" />
        </div>

        <div className="footer__tagline text-center font-thin text-xl md:text-2xl my-5">
          Living, learning & leveling <br />
          up one day at a time
        </div>

        <div className="footer__social">
          <FooterSocialLinks />
        </div>

        <div className="footer__copyright text-sm font-thin my-5">
          Handcrafted by me © twentytwentythree
        </div>
      </div>
    </div>
  );
}
