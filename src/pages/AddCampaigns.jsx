import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

function AddCampaigns() {
  const { user, loading } = useAuthContext();
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    if (!user) return;

    setUserObj({
      name: user.displayName,
      email: user.email,
    });
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const type = form.type.value;
    const info = form.description.value;
    const minamount = form.minamount.value;
    const deadline = form.deadline.value;
    const email = form.email.value;
    const name = form.name.value;

    const obj = {
      image,
      title,
      type,
      info,
      minamount,
      deadline,
      email,
      name,
    };

    fetch("https://backend-ecru-mu.vercel.app/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Campaign Added Successfully ");
      });

    form.reset();
  }

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <div className="h-[600px]  bg-[url('/c-4.jpg')]  bg-cover bg-no-repeat mb-24">
        <div className="h-full w-full bg-gradient-to-b from-black/40 to-black/60"></div>
        <p className=" bg-sky-400 text-lg md:text-4xl font-bold text-white text-center relative -top-14 left-1/3 -translate-x-6 md:-translate-x-16 lg:translate-x-0 px-12 py-6 w-[200px] md:w-[400px]">
          Add New Campaigns
        </p>
      </div>

      <div className=" min-h-[400px] flex  justify-center items-center  ">
        <form onSubmit={handleSubmit}>
          {/* form row name and quantity */}
          <div className="lg:flex gap-4">
            <div>
              <h3>Image</h3>
              <div className="join">
                <input
                  name="image"
                  type="text"
                  className="input input-bordered join-item w-[400px] "
                  placeholder="imageURL"
                />
              </div>
            </div>
            <div>
              <h3>Campaign title</h3>
              <div className="join">
                <input
                  name="title"
                  type="text"
                  className="input input-bordered join-item w-[400px]"
                  placeholder="Title"
                />
              </div>
            </div>
          </div>

          {/* form row supplier and test  */}
          <div className="lg:flex lg:flex-col gap-4">
            <div>
              <h3>Campaign type</h3>
              <div className="join">
                <select
                  name="type"
                  className="input input-bordered join-item w-[400px] lg:w-[815px]"
                >
                  <option>personal issue</option>
                  <option>startup</option>
                  <option>business</option>
                  <option>creative ideas</option>
                </select>
              </div>
            </div>
            <div>
              <h3>Description</h3>
              <div className="join">
                <textarea
                  name="description"
                  type="text"
                  className="input input-bordered join-item w-[400px] lg:w-[815px] h-[200px]"
                  placeholder="description"
                />
              </div>
            </div>
          </div>

          {/* form row category and details */}
          <div className="lg:flex gap-4">
            <div>
              <h3>Minimum donation amount</h3>
              <div className="join">
                <input
                  name="minamount"
                  type="number"
                  className="input input-bordered join-item w-[400px]"
                  placeholder="minimum donation amount"
                />
              </div>
            </div>
            <div>
              <h3>Deadline</h3>
              <div className="join">
                <input
                  name="deadline"
                  type="date"
                  className="input input-bordered join-item w-[400px]"
                  placeholder="Deadline"
                />
              </div>
            </div>
          </div>
          {/* form row photo */}

          <div className="lg:flex  gap-4">
            <div>
              <h3>Email</h3>
              <div className="join">
                <input
                  name="email"
                  type="email"
                  className="input input-bordered join-item w-[400px]"
                  placeholder="Email"
                  value={userObj.email || ""}
                  disabled
                />
              </div>
            </div>
            <div>
              <h3>Name</h3>
              <div className="join">
                <input
                  name="name"
                  type="text"
                  className="input input-bordered join-item w-[400px]"
                  placeholder="name"
                  value={userObj.name || ""}
                  disabled
                />
              </div>
            </div>
          </div>

          <input
            className="btn w-full my-6"
            type="submit"
            value="Add Camapign"
          />
        </form>
      </div>
    </>
  );
}

export default AddCampaigns;
