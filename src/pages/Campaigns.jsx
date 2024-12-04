import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ElementCard from "../components/ElementCard";
import { TbFileDescription } from "react-icons/tb";

function Campaigns() {
  const [loading, setLoading] = useState(true);
  const data = useLoaderData();
  const [campaigns, setCampaigns] = useState(data);
  console.log(campaigns);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  function handleSort() {
    const sortedCampaigns = [...campaigns].sort(
      (a, b) => b.minamount - a.minamount
    );
    console.log(sortedCampaigns);
    setCampaigns(sortedCampaigns);
  }

  if (loading) {
    return (
      <div className="min-h-[600px] mx-auto flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleSort} className="btn">
        Sort By Descending
      </button>
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
              <th>Minimum Amount</th>
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
                  <td>{campaign.minamount}</td>
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
