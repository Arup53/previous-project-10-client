import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";
import { MdOutlinePersonAdd } from "react-icons/md";

function Dropdown() {
  const { user } = useAuthContext();
  const color = "bg-orange-400 text-white";
  const padding = "rounded-lg";
  return (
    <details className="dropdown  text-sm  flex-none translate-x-4  box-border z-40">
      <summary className="btn bg-white bg-opacity-0 border-none rounded-none shadow-none">
        <div className="btn rounded-full w-12 h-12 bg-white bg-opacity-0 border-stone-100">
          <img
            className="w-[20px] h-[20px] object-contain"
            src="https://img.icons8.com/ios-filled/100/menu--v1.png"
            alt=""
          />
        </div>
      </summary>
      <ul className="menu w-[6.25rem]  text-xs dropdown-content bg-base-100 rounded-box z-[1]  -translate-x-8  shadow -px-4 ">
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `${padding} ${isActive && color}`}
            to={"/"}
          >
            HOME
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `   ${padding} ${isActive && color}`}
            to={"/campaigns"}
          >
            Campaigns
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            to={"/addcampaign"}
            className={({ isActive }) => `${padding} `}
          >
            Add New Campaign
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `${padding} ${isActive && color}`}
            to={"/mycampaign"}
          >
            My Campaign
          </NavLink>
        </li>
        <li className="max-w-full">
          <NavLink
            className={({ isActive }) => `${padding} ${isActive && color}`}
            to={"/mydonations"}
          >
            My Donations
          </NavLink>
        </li>
        <li className="max-w-full">
          {!user && (
            <NavLink
              className={({ isActive }) =>
                `px-4 py-2 flex gap-1 justify-center items-center  ${
                  isActive && "bg-orange-400 text-white rounded-lg"
                }`
              }
              to={"/signup"}
            >
              Register
            </NavLink>
          )}
        </li>
      </ul>
    </details>
  );
}

export default Dropdown;
