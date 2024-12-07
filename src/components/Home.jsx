import { useLoaderData } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Banner from "./Banner";

import RunningCampaignsV2 from "./RunningCampaignsV2";
import Statistics from "./Statistics";
import BecomeAVolunteer from "./BecomeAVolunteer";
import Loader from "./Loader";

function Home() {
  const campaigns = useLoaderData();
  const { theme, loading } = useAuthContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <div data-theme={theme} className="overflow-hidden">
      {/* banner section */}

      <Banner />

      {/*Running campaign sections */}
      <div className="w-full md:w-[90%] mx-auto">
        <h3 className="text-4xl font-bold my-12 text-center">
          Running Campaings
        </h3>
        <RunningCampaignsV2 />
      </div>
      {/* statistics section */}
      <div
        className={`${
          theme === "light" &&
          "bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900"
        }`}
      >
        <h3 className="text-4xl text-white font-bold mt-12 pt-12 text-center">
          Statistics
        </h3>
        <Statistics />
      </div>
      {/* Become a voulnteer secion */}
      <div className="overflow-hidden">
        <BecomeAVolunteer />
      </div>
    </div>
  );
}

export default Home;
