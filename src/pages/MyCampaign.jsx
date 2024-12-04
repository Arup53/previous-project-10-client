import { useEffect, useState } from "react";
import { Navigate, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthProvider";

function MyCampaign() {
  const { user, loading } = useAuthContext();
  const [myCampaigns, setMyCampaigns] = useState(null);

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
  // function handleDelete(id) {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // delete from the database
  //       fetch(`http://localhost:3000/users/${id}`, { method: "DELETE" })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount) {
  //             Swal.fire({
  //               title: "Deleted!",
  //               text: "Your file has been deleted.",
  //               icon: "success",
  //             });
  //           }
  //           const remaingUsers = users.filter((user) => user._id !== id);
  //           setUsers(remaingUsers);
  //           console.log(data);
  //         });
  //     }
  //   });
  // }

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
      {myCampaigns && <div className="w-[80%] mx-auto "></div>}
    </div>
  );
}

export default MyCampaign;
