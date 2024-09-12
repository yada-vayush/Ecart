import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to={"/"}>
        <img src={assets.logo} className="w-10" alt="logo" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-800">
        <NavLink to={"/"} className={"flex flex-col items-center gap-1"}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink
          to={"/collections"}
          className={"flex flex-col items-center gap-1"}
        >
          <p>COLLECTIONS</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink to={"/about"} className={"flex flex-col items-center gap-1"}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className={"flex flex-col items-center gap-1"}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-500 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.SearchIcon}
          className="w-7 cursor-pointer"
          onClick={() => setShowSearch(true)}
        />
        {localStorage.getItem("auth-token") ? (
          <div className="group relative">
            <Link to={"/signup"}>
              <img className="w-7 cursor-pointer" src={assets.Picon} alt="" />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 px-5 w-36 bg-slate-300 text-gray-600 srounded ">
                {/* <p className="cursor-pointer hover:text-gray-400">My Profile</p>
                <p className="cursor-pointer hover:text-gray-400">Orders</p> */}
                <NavLink
                  to={"/signup"}
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                >
                  {" "}
                  <p className="cursor-pointer hover:text-gray-400">Logout</p>
                </NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="group relative">
            <Link to={"/login"}>
              <img className="w-7 cursor-pointer" src={assets.Picon} alt="" />
            </Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 px-5 w-36 bg-slate-300 text-gray-600 srounded ">
                {/* <p className="cursor-pointer hover:text-gray-400">My Profile</p>
              <p className="cursor-pointer hover:text-gray-400">Orders</p> */}
                <NavLink to={"/login"}>
                  {" "}
                  <p className="cursor-pointer hover:text-gray-400">Log in</p>
                </NavLink>
              </div>
            </div>
          </div>
        )}

        <Link to={"/cart"} className="relative">
          <img className="w-7 min-w-7" src={assets.cart} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-5 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menuIcon}
          className="w-7  cursor-pointer sm:hidden"
        />
      </div>
      {/* Sidebar menu for small screen */}
      <div
        className={`absolute top-0  right-0 bottom-0 overflow-hidden bg-slate-200 transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-500 transition-all">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.backIcon} className="h-4 " />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/"}
            className={"py-2 pl-6 hover:bg-zinc-400 hover:text-black "}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/collections"}
            className={"py-2 pl-6 hover:bg-zinc-400 hover:text-black "}
          >
            COLLECTIONS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/about"}
            className={"py-2 pl-6 hover:bg-zinc-400 hover:text-black"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            to={"/contact"}
            className={"py-2 pl-6 hover:bg-zinc-400 hover:text-black "}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
