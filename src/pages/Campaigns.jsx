import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import ElementCard from "../components/ElementCard";
import { TbFileDescription } from "react-icons/tb";

function Campaigns() {
  const data = useLoaderData();
  const [campaigns, setCampaigns] = useState(data);
  console.log(campaigns);

  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Cause(type)</th>
              <th>Added By</th>
              <th>Deadline</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {campaigns &&
              campaigns?.map((campaign, idx) => (
                <tr key={campaign._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{campaign.title}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.name}</td>
                  <td>{campaign.deadline}</td>
                  <td>
                    <Link to={`/details/${campaign._id}`} className="btn">
                      <TbFileDescription />
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Campaigns;
