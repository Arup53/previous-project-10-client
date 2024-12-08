import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import Loader from "../components/Loader";

function MyDonations() {
  const { user, loading } = useAuthContext();
  const [myCampaigns, setMyCampaigns] = useState("");

  useEffect(() => {
    let { email } = user || {};
    if (email) {
      fetch(
        `https://backend-ecru-mu.vercel.app/mydonations?email=${encodeURIComponent(
          email
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMyCampaigns(data);
        });
    }
  }, [user]);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <div className="h-[600px]  bg-[url('/c-3.jpg')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className="bg-sky-400 text-lg md:text-4xl font-bold text-white text-center relative -top-14 left-1/3 -translate-x-6 md:-translate-x-16 lg:translate-x-0 px-12 py-6 w-[200px] md:w-[400px]">
          My Donations
        </p>
      </div>
      <h3 className="font-bold text-4xl text-center my-12">Donation Lists</h3>
      {/* main content */}

      <div className="w-full md:w-[80%] md:mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 px-4 ">
        {myCampaigns &&
          myCampaigns?.map((campaign, idx) => (
            <DonationCard key={campaign._id} campaign={campaign} />
          ))}
      </div>
    </div>
  );
}

export default MyDonations;
