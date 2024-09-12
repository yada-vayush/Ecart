import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    products,
    cartItems,
    currency,
    removeFromCart,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div>
        <div className="py-4 border-t border-b  border-gray-500 shadow-lg text-gray-700 grid grid-cols-[3fr_2fr_1fr_1fr] sm:grid-cols[4fr_2fr_2fr] gap-4 ">
          <div>Item</div>
          <div>Quantity</div>
          <div>Total</div>
          <div>Remove</div>
        </div>
        {products.map((product, index) => {
          if (cartItems[product.id] > 0) {
            console.log(product.id);

            return (
              <div
                key={index}
                className="py-4 border-t border-b  border-gray-500 shadow-lg text-gray-700 grid grid-cols-[3fr_2fr_1fr_1fr] sm:grid-cols[4fr_2fr_2fr] gap-4 "
              >
                <div className="flex items-start gap-6">
                  <img src={product.image} className="w-16 sm:w-20" />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {product.name}
                    </p>{" "}
                    <p>
                      {currency} {product.price}
                    </p>
                  </div>
                </div>

                <input
                  type="number"
                  min={1}
                  value={cartItems[product.id]}
                  className="  bg-inherit outline-none border  max-w-10 sm:max-w-20 px-2 sm:px-3  "
                />
                <div>
                  <p>
                    {currency}
                    {Math.floor(product.price * cartItems[product.id])}.00{" "}
                  </p>
                </div>
                <img
                  className="w-4 mr-4 sm:w-5 cursor-pointer  mt-1"
                  onClick={() => removeFromCart(product.id)}
                  src={assets.deleteIcon}
                  alt=""
                  srcSet=""
                />
              </div>
            );
          }
        })}
      </div>
      <div className=" flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm: my-8 px-8 py-3"
              onClick={() => navigate("/place-order")}
            >
              Procced to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
