import { useEffect, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { GrUpdate } from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";

function MyCampaign() {
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
        fetch(`http://localhost:3000/campaigns/${id}`, { method: "DELETE" })
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
    <div className="my-24 py-12">
      <div className="w-[80%] mx-auto ">
        {myCampaigns && (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="space-x-2">
                  <th></th>
                  <th>Title</th>
                  <th>Donation Type</th>
                  <th>Minimum Dontation Amount</th>
                  <th className="text-center">Deadline</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row  */}
                {myCampaigns &&
                  myCampaigns?.map((campaign, idx) => (
                    <tr key={campaign._id} className="hover">
                      <th>{idx + 1}</th>
                      <td>{campaign.title}</td>
                      <td>{campaign.type}</td>
                      <td>{campaign.minamount}</td>
                      <td>{campaign.deadline}</td>
                      <td className="flex gap-2">
                        <button className="btn text-green-600  text-sm">
                          <GrUpdate />
                        </button>
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
