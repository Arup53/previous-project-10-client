import { useEffect, useState } from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { TiDocumentAdd } from "react-icons/ti";
import { MdOutlineDeleteForever } from "react-icons/md";
import Loader from "../components/Loader";

function MyCampaign() {
  const { user, loading } = useAuthContext();
  const [myCampaigns, setMyCampaigns] = useState("");

  useEffect(() => {
    let { email } = user || {};
    if (email) {
      fetch(
        `https://backend-ecru-mu.vercel.app/mycampaigns?email=${encodeURIComponent(
          email
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyCampaigns(data);
        });
    }
  }, [user]);

  console.log(myCampaigns);

  function handleDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete from the database
        fetch(`https://backend-ecru-mu.vercel.app/campaigns/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaingUsers = myCampaigns.filter(
              (campaign) => campaign._id !== id
            );
            setMyCampaigns(remaingUsers);
            console.log(data);
          });
      }
    });
  }

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      <div className="h-[600px]  bg-[url('c-2.jpg')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className=" bg-orange-400 text-lg md:text-4xl font-bold text-white text-center relative -top-14 left-1/3 -translate-x-6 md:-translate-x-16 lg:translate-x-0 px-12 py-6 w-[200px] md:w-[400px]">
          My Campaigns
        </p>
      </div>

      <div className="w-[80%] mx-auto my-12 py-12">
        {myCampaigns && (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="space-x-2">
                  <th className="hidden md:block"></th>
                  <th>Title</th>
                  <th className="hidden md:block">Donation Type</th>
                  <th className="hidden lg:block">Minimum Dontation Amount</th>
                  <th className="text-center">Deadline</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {myCampaigns &&
                  myCampaigns?.map((campaign, idx) => (
                    <tr key={campaign._id} className="hover">
                      <th className="hidden md:block">{idx + 1}</th>
                      <td>{campaign.title}</td>
                      <td className="hidden md:block">{campaign.type}</td>
                      <td className="hidden lg:block">{campaign.minamount}</td>
                      <td>{campaign.deadline}</td>
                      <td className="flex gap-2">
                        <Link
                          to={`/updatecampaign/${campaign._id}`}
                          className="btn text-green-600  text-sm"
                        >
                          <TiDocumentAdd />
                        </Link>
                        <button
                          onClick={() => handleDelete(campaign._id)}
                          className="btn text-red-600 text-sm"
                        >
                          <MdOutlineDeleteForever />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCampaign;
