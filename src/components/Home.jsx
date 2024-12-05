import { useLoaderData } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Banner from "./Banner";

import RunningCampaignsV2 from "./RunningCampaignsV2";

function Home() {
  const campaigns = useLoaderData();
  return (
    <div>
      {/* banner section */}
      <Banner />

      {/*Running campaign sections */}
      <div className="w-[90%] mx-auto">
        <h3 className="text-4xl font-bold my-12 text-center">
          Running Campaings
        </h3>
        <RunningCampaignsV2 />
      </div>
      {/* statistics section */}
      <div className="w-[90%] mx-auto"></div>
    </div>
  );
}

export default Home;
