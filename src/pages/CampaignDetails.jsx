import { Navigate, useLoaderData, useParams } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect, useState } from "react";
import moment from "moment";
import { deadlineChecker } from "../util/utilites";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

function CampaignDetails() {
  const { image, title, type, info, minamount, deadline, email, name } =
    useLoaderData();
  const { user, loading } = useAuthContext();
  const { id } = useParams();

  const date = deadline && moment(deadline).format("D MMMM YYYY");

  function handleDonateSubmission(name, email) {
    const bool = deadlineChecker(deadline);

    const donatedUser = {
      email,
      name,
      image,
      title,
      type,
      info,
      minamount,
      deadline,
    };

    if (!bool) {
      toast.error("Sorry, Deadline Is Over For this Event; You Can't Donate ");
      return;
    }

    fetch("https://backend-ecru-mu.vercel.app/donations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(donatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Congratulations, Donated Successfully");
      });
  }

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="my-6 lg:my-18 ">
      <div className="flex flex-col lg:flex-row  justify-center items-center lg:justify-between lg:items-start gap-6">
        {/* left */}
        <div className="flex flex-col gap-6 basis-4/5 shadow-2xl space-y-4 p-12">
          <figure>
            <img
              className="h-[500px] md:object-cover  w-full "
              src={`${image}`}
            />
          </figure>
          <h3>{title}</h3>
          <p>{info}</p>
          <button
            onClick={() => handleDonateSubmission(user.displayName, user.email)}
            className="btn w-full"
          >
            Donate
          </button>
        </div>

        {/* right */}
        <div className="flex flex-col gap-6 basis-1/5  shadow-2xl space-y-4 px-2 py-6 h-[400px] w-[400px] md:w-[600px] lg:w-full">
          <h3 className="text-center font-bold pt-4">About This Campaign</h3>
          <div className="flex justify-between gap-1 text-xs ">
            <p>Campaign Type</p>
            <p>{type && type}</p>
          </div>
          <div className="flex justify-between gap-1 text-xs ">
            <p>Deadline</p>
            <p>{date && date}</p>
          </div>
          <div className="flex justify-between gap-1 text-xs ">
            <p>
              Minimum Donation <br /> Amount
            </p>
            <p>{minamount && minamount}$</p>
          </div>
          <div className="flex justify-between gap-1 text-xs ">
            <p>
              Added by <br />
            </p>
            <p>{name && name}</p>
          </div>
          <div className="flex justify-between gap-1 text-xs ">
            <p>
              Email <br />
            </p>
            <p>{email && email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignDetails;
