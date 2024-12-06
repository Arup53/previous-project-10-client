import { Carousel } from "flowbite-react";
import { Typewriter } from "react-simple-typewriter";

function Banner() {
  return (
    <div className="w-full mb-24  ">
      <div className="w-full   ">
        <div className=" h-[100vh] ">
          <Carousel
            slideInterval={9000}
            theme={{
              control: {
                base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 group-hover:bg-yellow-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white hover:scale-105 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10 hidden md:flex ",
                icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
              },

              indicators: {
                active: {
                  off: "bg-white  hover:bg-yellow-300",
                  on: "bg-orange-500 hover:scale-125 hover:bg-yellow-300 ",
                },
                base: "h-3 w-3 rounded-full",
                wrapper:
                  "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
              },
              scrollContainer: {
                base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth ",
                snap: "snap-x",
              },
            }}
          >
            {/* slider-1 */}
            <div
              className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
              style={{ backgroundImage: `url(B-1.jpg)` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative h-full flex flex-col justify-center items-center ">
                <p className="z-10 md:px-14  text-3xl md:text-5xl text-white text-center  font-bold tracking-wider leading-normal">
                  Let's Come Together to <br />
                  <Typewriter
                    words={[
                      "Share a Meal",
                      "Bond Over Food",
                      "Unite Over Food",
                    ]}
                    loop={false}
                  />
                </p>
                <p className="text-sm text-white text-center my-2">
                  Food banks, shelters, healthcare services, education programs,
                  or disaster relief efforts, every <br /> donation counts and
                  can help improve someone's quality of life
                </p>
              </div>
            </div>
            {/* slider-2 */}
            <div
              className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
              style={{ backgroundImage: `url(B-2.jpg)` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
              <div className="relative h-full flex flex-col justify-center items-center pl-24 ">
                <p className="md:self-start  z-10 md:px-14  text-3xl md:text-5xl text-white text-left  font-bold tracking-wider leading-normal ">
                  Empower with{" "}
                  <Typewriter
                    words={["Knowledge", "Wisdom", "Learning"]}
                    loop={false}
                  />
                </p>
                <p className=" md:self-start text-sm text-white md:text-left my-2 md:pl-14  ">
                  Your donation can bring books, school supplies, and
                  educational support to communities in need,
                  <br /> paving the way for brighter futures.
                </p>
              </div>
            </div>

            {/* slider-3 */}
            <div
              className="relative h-full bg-no-repeat bg-cover backdrop-blur-2xl"
              style={{ backgroundImage: `url(B-3.jpg)` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
              <div className="relative h-full flex flex-col justify-center items-center md:pr-24 ">
                <p className="md:self-end  z-10 md:px-14  text-3xl md:text-5xl text-white md:text-left  font-bold tracking-wider leading-normal ">
                  Join Hands to Save <br />
                  <Typewriter
                    words={["Lives", "Families", "Humanity"]}
                    loop={false}
                  />
                </p>
                <p className=" self-end text-sm text-white text-left my-2 md:pr-10  ">
                  Donations go directly to funding treatments, medicines, and
                  health services for <br /> people in vulnerable situations,
                  making healthcare accessible to all.
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner;
