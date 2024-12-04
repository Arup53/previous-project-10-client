import { useLoaderData, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect, useState } from "react";
import moment from "moment";

function CampaignDetails() {
  const { image, title, type, info, minamount, deadline, email, name } =
    useLoaderData();
  const { user, loading } = useAuthContext();
  const { id } = useParams();

  console.log(image, title, type, info, minamount, deadline, email, name);

  const date = deadline && moment(deadline).format("D MMMM YYYY");

  console.log(date);

  if (loading) {
    return (
      <div className="min-h-[600px] mx-auto flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="my-24">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        {/* left */}
        <div className="flex flex-col gap-6 basis-4/5 shadow-2xl space-y-4 p-12">
          <figure>
            <img className="h-[500px] object-cover w-full " src={`${image}`} />
          </figure>
          <h3>{title}</h3>
          <p>{info}</p>
        </div>

        {/* right */}
        <div className="flex flex-col gap-6 basis-1/5  shadow-2xl space-y-4 px-3 py-6">
          <h3></h3>
          <div className="flex justify-between gap-1 text-xs ">
            <p>Deadline</p>
            <p>{date && date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
