import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useEffect, useState } from "react";
import DonationCard from "../components/DonationCard";

function MyDonations() {
  const { user, loading } = useAuthContext();
  const [myCampaigns, setMyCampaigns] = useState("");

  useEffect(() => {
    let { email } = user || {};
    if (email) {
      fetch(
        `http://localhost:3000/mycampaigns?email=${encodeURIComponent(email)}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyCampaigns(data);
        });
    }
  }, [user]);

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
    <div>
      <div className="h-[600px]  bg-[url('c-3.jpg')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className="bg-orange-400 text-4xl font-bold text-white text-center relative -top-14 left-1/3 px-12 py-6 w-[400px]">
          My Donations
        </p>
      </div>
      <h3 className="font-bold text-4xl text-center my-12">Donation Lists</h3>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 ">
        {myCampaigns &&
          myCampaigns?.map((campaign, idx) => (
            <DonationCard key={campaign._id} campaign={campaign} />
          ))}
      </div>
    </div>
  );
}

export default MyDonations;
