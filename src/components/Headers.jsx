import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

function Headers() {
  const { user, logOut } = useAuthContext();

  function handleLogOut() {
    logOut();
  }

  return (
    <div className=" md:mx-auto flex justify-between  gap-6 bg-red-300">
      <div>Logo</div>
      <div className="flex justify-between gap-2">
        <NavLink className="btn" to={"/"}>
          Home
        </NavLink>
        <NavLink className="btn" to={"/campaigns"}>
          Campaigns
        </NavLink>
        <NavLink className="btn" to={"/addcampaign"}>
          Add New Campaign
        </NavLink>
        <NavLink className="btn" to={"/users"}>
          My Campaign
        </NavLink>
        <NavLink className="btn" to={"/login"}>
          Login
        </NavLink>
        <NavLink className="btn" to={"/signup"}>
          Register
        </NavLink>
      </div>
      <div className="flex items-center gap-2  ">
        <div>
          {user && (
            <img
              className="w-[20px] h-[20px] rounded-full"
              src={`${user?.photoURL}`}
            />
          )}
        </div>
        <div className="px-2">
          {user ? (
            <button onClick={handleLogOut} className="btn">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Headers;
