import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthProvider";

function AddElements() {
  const { user, loading } = useAuthContext();
  const [userObj, setUserObj] = useState({});
  console.log(user);

  useEffect(() => {
    if (!user) return;

    setUserObj({
      name: user.displayName,
      email: user.email,
    });
  }, [user]);

  console.log(userObj);
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

    console.log(obj);

    fetch("http://localhost:3000/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    form.reset();
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
    <div className="min-h-[400px] flex justify-center items-center ">
      <form onSubmit={handleSubmit}>
        {/* form row name and quantity */}
        <div className="md:flex gap-4">
          <div>
            <h3>Image</h3>
            <div className="join">
              <input
                name="image"
                type="text"
                className="input input-bordered join-item w-[400px]"
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
        <div className="md:flex gap-4">
          <div>
            <h3>Campaign type</h3>
            <div className="join">
              <select
                name="type"
                className="input input-bordered join-item w-[400px]"
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
              <input
                name="description"
                type="text"
                className="input input-bordered join-item w-[400px]"
                placeholder="description"
              />
            </div>
          </div>
        </div>

        {/* form row category and details */}
        <div className="md:flex gap-4">
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

        <div className="md:flex  gap-4">
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

        <input className="btn w-full" type="submit" value="Add Camapign" />
      </form>
    </div>
  );
}

export default AddElements;
