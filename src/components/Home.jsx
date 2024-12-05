import { useLoaderData } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Banner from "./Banner";
import RunningCampaigns from "./RunningCampaigns";
import RunningCampaignsV2 from "./RunningCampaignsV2";

function Home() {
  const campaigns = useLoaderData();
  return (
    <div>
      {/* banner section */}
      <Banner />

      {/*Running campaign sections */}
      <div>
        <h3 className="text-4xl font-bold my-12 text-center">
          Running Campaings
        </h3>
        <RunningCampaignsV2 />
      </div>
      {/* 2 extra section */}
    </div>
  );
}

export default Home;
