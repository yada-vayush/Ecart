/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="text-gray-500 cursor-pointer rounded-md m-1 p-1"
    >
      <div className="overflow-hidden  h-[220px] mt-2 shadow-lg">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm text-slate-800">{name}</p>
      <p className="text-sm font-medium text-slate-900">
        {currency} {price}
      </p>
    </Link>
  );
};

export default ProductItem;
