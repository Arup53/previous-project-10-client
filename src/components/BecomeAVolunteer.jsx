import Lottie from "lottie-react";
import Animation1 from "../animation/Animation1.json";
import { useAuthContext } from "../context/AuthProvider";

function BecomeAVolunteer() {
  const { theme } = useAuthContext();
  return (
    <div
      className="relative bg-no-repeat md:bg-cover backdrop-blur-2xl flex flex-col items-center md:flex-row justify-around gap-6 h-[450px] md:h-[500px]"
      style={{ backgroundImage: `url(w-1.jpg)` }}
    >
      <div
        className={`absolute inset-0 bg-black   ${
          theme === "dark" ? "bg-opacity-80" : "bg-opacity-50"
        }`}
      ></div>

      <div className="w-[100px] h-[100px] md:w-[400px] md:h-[400px]">
        <Lottie animationData={Animation1} loop={true} />
      </div>
      <div className="lg:relative  flex flex-col justify-center items-center md:pr-24  ">
        <p className=" md:self-end  z-10 md:px-14  text-3xl md:text-5xl text-white md:text-left  font-bold tracking-wider leading-normal ">
          Become a Volunteer
          <br />
          Join With Our Team
        </p>
        <p className="md:self-end text-left text-white -translate-x-28 ">
          Join us as a volunteer and be a driving force behind impactful
          crowdfunding campaigns!
        </p>
        <div className=" md:self-end text-sm text-white text-left my-2 md:pr-16  ">
          <div className="join">
            <input
              className="input input-bordered join-item w-[200px] md:w-[400px]"
              placeholder="Email"
            />
            <button className="btn join-item">Join Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BecomeAVolunteer;
