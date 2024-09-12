import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (location.pathname.includes("collections")) setVisible(true);
    else setVisible(false);
  }, [location]);
  return showSearch && visible ? (
    <div className="border-t border-b bg-inherit text-center shadow-md">
      <div className="inline-flex items-center justify-center border border-gray-500 px-5 py-2 my-5 mx-3 rounded-full w-3/4  sm:w-1/2  ">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={assets.SearchIcon} className="w-4 bg-inherit" />
      </div>
      <img
        className="inline w-3 cursor-pointer"
        src={assets.cross}
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
