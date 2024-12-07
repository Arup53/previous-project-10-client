import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

import { TbFileDescription } from "react-icons/tb";
import Loader from "../components/Loader";

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
    return <Loader />;
  }

  return (
    <div>
      <div className="h-[600px] bg-[url('/c-1.jpg')]  bg-cover bg-no-repeat mb-12">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
      </div>
      <p className="bg-sky-400 text-lg md:text-4xl font-bold text-white text-center relative -top-24  left-1/3 -translate-x-6 md:-translate-x-16 lg:translate-x-0 px-12 py-6 w-[200px] md:w-[400px] ">
        Campaigns
      </p>
      <button onClick={handleSort} className="btn">
        Sort By Descending
      </button>
      <div className="overflow-x-auto w-full md:w-[80%] mx-auto ">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th className="hidden lg:block">Cause(type)</th>
              <th>Added By</th>
              <th>Deadline</th>
              <th className="hidden md:block">Minimum Amount</th>
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
                  <td className="hidden lg:block">{campaign.type}</td>
                  <td>{campaign.name}</td>
                  <td>{campaign.deadline}</td>
                  <td className="hidden md:block">{campaign.minamount}</td>
                  <td>
                    <Link
                      className="btn btn-ghost"
                      to={`/details/${campaign._id}`}
                    >
                      <div className="flex flex-col justify-center items-center gap-1 ">
                        <div className="text-center">
                          <TbFileDescription />
                        </div>
                        <p className="text-center text-xs">See More</p>
                      </div>
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
