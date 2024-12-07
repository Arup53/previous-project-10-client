import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { useState } from "react";
import { MdOutlineHome } from "react-icons/md";
import { FaTable } from "react-icons/fa";
import { MdOutlinePostAdd } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";
import { TbDoorEnter } from "react-icons/tb";
import { MdOutlinePersonAdd } from "react-icons/md";
import { MdNightsStay } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Tooltip } from "react-tooltip";

function Headers() {
  const { user, logOut, loading, theme } = useAuthContext();
  const { handleToggle } = useAuthContext();
  const bg = "bg-sky-400";

  console.log(user);
  function handleLogOut() {
    logOut();
  }

  return (
    <div className=" md:mx-auto flex justify-between  md:gap-6 py-4   ">
      <div>Logo</div>
      <div className="lg:flex md:justify-between md:gap-2 text-sm hidden overflow-hidden ">
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 flex gap-1 justify-center items-center  ${
              isActive && `${bg} text-white rounded-lg`
            }`
          }
          to={"/"}
        >
          <span className="text-sm">
            <MdOutlineHome />
          </span>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `md:px-4 py-2 flex gap-1 justify-center items-center  ${
              isActive && `${bg} text-white rounded-lg`
            }`
          }
          to={"/campaigns"}
        >
          <span>
            <FaTable />
          </span>
          Campaigns
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 flex gap-1 justify-center items-center  ${
              isActive && `${bg} text-white rounded-lg`
            }`
          }
          to={"/addcampaign"}
        >
          <span>
            <MdOutlinePostAdd />
          </span>
          Add New Campaign
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 flex gap-1 justify-center items-center  ${
              isActive && `${bg} text-white rounded-lg`
            }`
          }
          to={"/mycampaign"}
        >
          <span>
            <GrDocumentStore />
          </span>{" "}
          My Campaign
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-4 py-2 flex gap-1 justify-center items-center  ${
              isActive && `${bg} text-white rounded-lg`
            }`
          }
          to={"/mydonations"}
        >
          <span>
            <GiPayMoney />
          </span>{" "}
          My Donations
        </NavLink>

        {!user && (
          <NavLink
            className={({ isActive }) =>
              `px-4 py-2 flex gap-1 justify-center items-center  ${
                isActive && `${bg} text-white rounded-lg`
              }`
            }
            to={"/signup"}
          >
            <span>
              <MdOutlinePersonAdd />
            </span>{" "}
            Register
          </NavLink>
        )}
      </div>

      {/* user */}
      <div className="flex justify-center items-center gap-2 overflow-hidden ">
        <div>
          <a className="my-anchor-element">
            {user && (
              <img
                className="  inline w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full"
                src={`${user?.photoURL}`}
              />
            )}
          </a>
          <Tooltip anchorSelect=".my-anchor-element" place="left">
            {user && user?.displayName}
          </Tooltip>
        </div>

        {/* logut-login section */}
        {!loading && (
          <div className=" md:px-2">
            {user ? (
              <button onClick={handleLogOut}>Logout</button>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </div>
        )}
        {/* day-night toggler */}
        <div>
          <div className={`px-2 py-1  cursor-pointer `}>
            <p onClick={handleToggle} className="text-3xl">
              {theme === "light" ? <MdNightsStay /> : <BsSun />}
            </p>
          </div>
        </div>
      </div>

      {/* dropdown */}
      <div className="lg:hidden">
        <Dropdown />
      </div>
    </div>
  );
}

export default Headers;
