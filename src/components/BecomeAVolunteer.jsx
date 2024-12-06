import Lottie from "lottie-react";
import Animation1 from "../animation/Animation1.json";

function BecomeAVolunteer() {
  return (
    <div
      className="relative bg-no-repeat bg-cover backdrop-blur-2xl flex flex-col items-center md:flex-row justify-around gap-6 h-[500px]"
      style={{ backgroundImage: `url(w-1.jpg)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

      <div className="w-[400px] h-[400px]">
        <Lottie animationData={Animation1} loop={true} />
      </div>
      <div className="relative  flex flex-col justify-center items-center pr-24  ">
        <p className=" self-end  z-10 md:px-14  text-3xl md:text-5xl text-white text-left  font-bold tracking-wider leading-normal ">
          Become a Volunteer
          <br />
          Join With Our Team
        </p>
        <p className="self-end text-left text-white -translate-x-28 ">
          Join us as a volunteer and be a driving force behind impactful
          <br />
          crowdfunding campaigns!Your time and skills can help amplify <br />
          important causes, connect with passionate changemakers,
          <br /> and bring dreams to life.
        </p>
        <div className=" self-end text-sm text-white text-left my-2 pr-16  ">
          <div className="join">
            <input
              className="input input-bordered join-item w-[400px]"
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
