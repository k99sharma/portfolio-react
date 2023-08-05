// importing components
import Projects from "../components/Projects";

// home page
export default function Home() {
  return (
    <div className="home mb-24">
      <div className="home__header text-center">
        <div className="home__header__heading text-2xl md:text-4xl">
          Designer & Web Developer
        </div>

        <div className="home__header__subheading my-5 text-md md:text-xl">
          I <span className="text-red-500">❤</span> to develop and build things
        </div>
      </div>

      <div className="home__developer my-14 flex items-center justify-center">
        <img
          height={150}
          width={150}
          src="/assets/developer.svg"
          alt="developer"
        />
      </div>

      <div className="home__illustration flex items-center justify-center -mb-8 md:-mb-10">
        <img src="/assets/home.svg" alt="home illustration" />
      </div>

      <div className="home__about bg-gradient-to-b from-bg-0 to-bg-1 p-10">
        <div className="home__about__content text-center mb-10 text-neutral-0">
          <div className="home__about__content__header font-semibold text-2xl my-10">
            Hi, I'm Kalash. Nice to meet you.
          </div>

          <div className="home__about__content__subheader text-lg flex items-center justify-center">
            <div className="font-light md:w-4/5 lg:w-3/5">
              I’m a self-taught developer. And love to experiment with new
              technologies. I’m quietly confident, naturally curious, and
              perpetually working on improving my skills. In my spare time I
              like building my own products
            </div>
          </div>
        </div>

        <div className="home__about__skills flex items-center justify-center text-center">
          <div className="home__about__skills__container grid grid-cols-1 md:grid-cols-2 md:w-4/5 bg-neutral-0 rounded-2xl px-5 py-10 shadow-lg -mb-20">
            <div className="home__about__skills__container__skill1">
              {/* programming languages */}
              <div className="mb-8">
                <div className="skill__header mb-2 text-md font-semibold">
                  Programming Languages
                </div>

                <div className="skill__content text-sm">
                  C • HTML5 & CSS3 • Java • JavaScript • TypeScript
                </div>
              </div>

              {/* ide */}
              <div className="mb-8">
                <div className="skill__header mb-2 text-md font-semibold">
                  IDEs
                </div>

                <div className="skill__content text-sm">VS Code • IntelliJ</div>
              </div>

              {/* coding profiles */}
              <div className="hidden md:block">
                <div className="skill__header mb-3 text-md font-semibold">
                  Coding Profiles
                </div>

                <div className="skill__content text-sm flex items-center justify-center">
                  <div className="skill__content__hackerrank">
                    <a
                      href="https://www.hackerrank.com/kalash_strt"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mx-3"
                        width={30}
                        height={30}
                        src="/assets/hackerrank.svg"
                        alt="hackerrank"
                      />
                    </a>
                  </div>

                  <div className="skill__content__leetcode">
                    <a
                      href="https://leetcode.com/kalashsharma99/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mx-3"
                        width={30}
                        height={30}
                        src="/assets/leetcode.svg"
                        alt="leetcode"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* libraries & Frameworks */}
            <div className="home__about__skills__container__skill2">
              <div className="mb-8">
                <div className="skill__header mb-2 text-md font-semibold">
                  Libraries & Frameworks
                </div>

                <div className="skill__content text-sm">
                  ReactJs • ExpressJs • NodeJs • Docker
                </div>
              </div>

              {/* databases */}
              <div className="mb-8">
                <div className="skill__header mb-2 text-md font-semibold">
                  Databases
                </div>

                <div className="skill__content text-sm">
                  MongoDB • MySQL • Redis
                </div>
              </div>

              {/* dev tools */}
              <div className="mb-8">
                <div className="skill__header mb-2 text-md font-semibold">
                  Dev Tools
                </div>

                <div className="skill__content text-sm">
                  Postman • Git & GitHub • Terminal • Figma
                </div>
              </div>

              {/* coding profiles */}
              <div className="md:hidden">
                <div className="skill__header mb-2 text-md font-semibold">
                  Coding Profiles
                </div>

                <div className="skill__content text-sm flex items-center justify-center">
                  <div className="skill__content__hackerrank">
                    <a
                      href="https://www.hackerrank.com/kalash_strt"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mx-3"
                        width={30}
                        height={30}
                        src="/assets/hackerrank.svg"
                        alt="hackerrank"
                      />
                    </a>
                  </div>

                  <div className="skill__content__leetcode">
                    <a
                      href="https://leetcode.com/kalashsharma99/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="mx-3"
                        width={30}
                        height={30}
                        src="/assets/leetcode.svg"
                        alt="leetcode"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
        <Projects />
      </>
    </div>
  );
}
