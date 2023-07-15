// importing components
import Divider from "../components/Divider";
import ProfilePic from "../components/ProfilePic";

// about page
export default function About() {
  return (
    <div className="about">
      <div className="about__header text-primary-3 font-bold text-base mb-10">
        ABOUT ME
      </div>

      <div className="about__profilePic mb-10">
        <ProfilePic />
      </div>

      <div className="about__description text-neutral-5 font-montserrat mb-5">
        Hi, I'm Kalash Sharma, an undergraduate student studying computer
        science at the KIET Group of Institutions in Ghaziabad.
        <br />
        <br />
        I am a self-taught developer that enjoys learning and experimenting with
        new technologies. I am now researching web-related technologies.
        <br />
        <br />
        In my college years, I looked into a variety of facets of project
        development, internships, and open-source contributions as a way to
        participate in technical communities and societies. I aim to level
        myself up every day by seeking out new learning opportunities.
        <br />
        <br />
        Besides that, I enjoy watching movies, TV shows, and anime.
      </div>

      <div className="divider">
        <Divider />
      </div>

      <div className="about__contact">
        <div className="about__contact__heading text-primary-3 font-montserrat text-md font-semibold mb-2">
          GET IN TOUCH
        </div>

        <div className="about__contact__subheading text-neutral-5 mb-5 text-md">
          Message me if you have any work opportunities or a 'cool' project
          idea!
        </div>

        <div className="about__contact__mail hover:border-b-2 text-neutral-6 inline-block font-thin text-lg">
          <a href="mailto:kalash.strt@gmail.com" aria-label="mail">
            kalash.strt@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
