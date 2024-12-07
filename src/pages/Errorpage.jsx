import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import ErrorAnimation from "../animation/erroranimation.json";

function Errorpage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <div className="w-[400px] h-[400px]">
          <Lottie animationData={ErrorAnimation} loop={true} />
        </div>
        <h3 className="text-center text-4xl ">You Have Typed Wrong URL</h3>
        <Link className="btn my-12 bg-sky-400 text-white" to={"/"}>
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default Errorpage;
