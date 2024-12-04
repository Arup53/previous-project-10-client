import { Link, NavLink } from "react-router-dom";

function Headers() {
  return (
    <div className=" md:mx-auto flex justify-between  gap-6 bg-red-300">
      <div>Logo</div>
      <div className="flex justify-between gap-2">
        <NavLink className="btn" to={"/"}>
          Home
        </NavLink>
        <NavLink className="btn" to={"/elements"}>
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
      <div>User Photo Here</div>
    </div>
  );
}

export default Headers;
