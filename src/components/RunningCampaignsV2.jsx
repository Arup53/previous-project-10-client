import { useEffect, useState } from "react";
import { filterByActivation, limiter } from "../util/utilites";
import moment from "moment";
import { useAuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { TbFileDescription } from "react-icons/tb";

function RunningCampaignsV2() {
  const [campaigns, setCampaigns] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/campaigns")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const filteredData = filterByActivation(data);
        const finalData = limiter(filteredData);
        setCampaigns(finalData);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        {campaigns &&
          campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="card bg-base-100 w-80   lg:w-96 mx-auto rounded-t-none shadow-xl"
            >
              <figure>
                <img className="h-[300px] w-full" src={`${campaign.image}`} />
              </figure>
              <div className="card-body space-y-6">
                <h2 className="text-lg text-center font-bold">
                  {campaign.title}
                </h2>

                <p className="text-sm">Donation Type: {campaign.type}</p>

                <p className="text-sm">
                  Deadline: {moment(campaign.deadline).format("D MMMM YYYY")}
                </p>
              </div>
              <Link
                className="btn btn-ghost py-2"
                to={`/details/${campaign._id}`}
              >
                <p className="text-center text-sm ">See More</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RunningCampaignsV2;
