import Lottie from "lottie-react";
import Animation1 from "../animation/Animation1.json";
import { useAuthContext } from "../context/AuthProvider";

function BecomeAVolunteer() {
  const { theme } = useAuthContext();
  return (
    <div className="bg-no-repeat bg-[url('/background.jpg')] md:bg-cover backdrop-blur-2xl flex flex-col items-center lg:flex-row justify-around gap-6 h-[450px] md:min-h-[600px] py-6">
      <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
        <Lottie animationData={Animation1} loop={true} />
      </div>
      <div className=" flex flex-col justify-center items-center space-y-4 md:space-y-0 lg:space-y-6 md:translate-x-16 lg:translate-x-0 md:pr-24  ">
        <p className=" md:self-end text-center lg:text-left  z-10 md:px-14  text-3xl md:text-5xl text-white md:text-left  font-bold tracking-wider leading-normal ">
          Become a Volunteer
          <br />
          Join With Our Team
        </p>
        <p className="md:self-end text-center lg:text-left text-white translate-x-0 lg:translate-x-14 ">
          Join us as a volunteer and be a driving force behind impactful
          <br className="hidden md:block" />
          crowdfunding campaigns!
        </p>
        <div className="lg:self-end text-sm text-white text-left my-2 translate-x-20 md:translate-x-16 lg:translate-x-14 ">
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
