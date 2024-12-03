import { Link, NavLink } from "react-router-dom";

function Headers() {
  return (
    <div className="flex justify-center gap-6">
      <NavLink className="btn" to={"/"}>
        Home
      </NavLink>
      <NavLink className="btn" to={"/signup"}>
        SignUp
      </NavLink>
      <NavLink className="btn" to={"/login"}>
        Login
      </NavLink>
      <NavLink className="btn" to={"/users"}>
        Users
      </NavLink>

      <NavLink className="btn" to={"/elements"}>
        Elements
      </NavLink>
      <NavLink className="btn" to={"/addelements"}>
        Add Elements
      </NavLink>
    </div>
  );
}

export default Headers;
