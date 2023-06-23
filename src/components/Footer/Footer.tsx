// importing components
import { Link } from "react-router-dom";
import SimpleButton from "../SimpleButton/SimpleButton";

// link type
type linkType = {
  label: string;
  path: string;
  isURL: boolean;
};

// site navigation links
const siteNavigation: linkType[] = [
  {
    label: "Home",
    path: "/",
    isURL: false,
  },
  {
    label: "About",
    path: "/about",
    isURL: false,
  },
  {
    label: "Blog",
    path: "/blog",
    isURL: false,
  },
];

// social links
const socials: linkType[] = [
  {
    label: "Gmail",
    path: "mailto:kalash.strt@gmail.com",
    isURL: true,
  },
  {
    label: "GitHub",
    path: "#",
    isURL: true,
  },
  {
    label: "LinkedIn",
    path: "#",
    isURL: true,
  },
];

// showcase links
const showcase: linkType[] = [
  {
    label: "Resume",
    path: "#",
    isURL: true,
  },
  {
    label: "Projects",
    path: "#",
    isURL: false,
  },
  {
    label: "Hashnode",
    path: "#",
    isURL: true,
  },
];

// footer component
export default function Footer() {
  return (
    <div className="footer my-5">
      <div className="footer__buttons grid grid-cols-3 my-5">
        <div className="footer__buttons__site__navigation">
          <FooterColumn links={siteNavigation} />
        </div>

        <div className="footer__buttons__showcase">
          {<FooterColumn links={showcase} />}
        </div>

        <div className="footer__buttons__social">
          {<FooterColumn links={socials} />}
        </div>
      </div>

      <div className="footer__copyright text-sm">Copyright © Kalash Sharma</div>
    </div>
  );
}

// footer link column
type footerColumnPropType = {
  links: linkType[];
};

export function FooterColumn({ links }: footerColumnPropType) {
  return (
    <div className="footerColumn flex flex-col items-start">
      {links.map((options) => {
        return <SimpleButton key={options.label} options={options} />;
      })}
    </div>
  );
}
