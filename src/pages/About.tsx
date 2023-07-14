// importing components
import Divider from "../components/Divider";
import ProfilePic from "../components/ProfilePic";

// about page
export default function About() {
  return (
    <div className="about">
      <div className="about__header text-secondary-4 font-semibold text-md mb-10">
        ABOUT ME
      </div>

      <div className="about__profilePic mb-10">
        <ProfilePic />
      </div>

      <div className="about__description text-neutral-5 font-montserrat mb-5">
        Hi, I am Kalash Sharma and rest of text is copied so don’t bother
        reading it. <br />
        <br />
        Born in Delhi, India, and raised in Lucknow, currently working remotely
        from a city in the state of Uttar Pradesh. <br />
        <br />
        As a self-educated developer, it led me to explore various technologies
        that help in running the web. And such technologies aided to build my
        work experience in multiple startups as an intern where I encountered
        the making of different phases of a product. <br />
        <br />
        During the early days of college, my desire to program and to create
        things sprung up. With my increasing love for code, my interest in open
        source and tech-communities peaked. Being a part of a community is more
        than just a godsend. It eased my chances of meeting some exceptional
        people in my life. And since then, I have strived to make myself and my
        days better. <br />
        <br />
        Aside from this, I possess a few hobbies. From time to time, I treat
        myself with movies and TV series, favorite genres being thriller,
        action, and comedy. I am a keen anime enthusiast, and only recently, I
        have begun reading manga too. When unoccupied from the above activities,
        you will find me nicely tucked in my bed.
      </div>

      <div className="divider">
        <Divider />
      </div>

      <div className="about__contact">
        <div className="about__contact__heading text-secondary-4 font-montserrat text-md font-semibold mb-2">
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
