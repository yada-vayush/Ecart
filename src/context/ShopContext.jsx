/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
//import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;
  return cart;
};

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const navigate = useNavigate();
  const currency = "₹";

  const deliveryFee = 15;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/v1/getAll");
        console.log(response.data.data);

        setProducts(response.data.data);
        if (localStorage.getItem("auth-token")) {
          const response = await axios.post(
            "http://localhost:3001/api/v1/getCart",
            {},
            {
              headers: {
                Accept: "application/form-data",
                "auth-token": `${localStorage.getItem("auth-token")}`,
                "Content-Type": "application/json",
              },
            }
          );
          console.log(response.data.data);

          setCartItems(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (itemId) => {
    console.log(itemId);

    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if (localStorage.getItem("auth-token")) {
      const response = await axios.post(
        "http://localhost:3001/api/v1/addToCart",
        { itemId },
        {
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      const response = await axios.post(
        "http://localhost:3001/api/v1/removeToCart",
        { itemId },
        {
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;

    for (const item in cartItems) {
      try {
        if (cartItems[item] > 0) totalCount += cartItems[item];
      } catch (error) {
        console.log("====================================");
        console.log(error);
        console.log("====================================");
      }
    }
    console.log(totalCount);

    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    console.log(cartItems);

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += Math.floor(itemInfo.price * cartItems[item]);
      }
    }
    return totalAmount;
  };
  const value = {
    products,
    currency,
    deliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
