import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === Number(productId)) {
        setProductData(item);
        setImage(item.image);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-20 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*  product images*/}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {/* {productData.image.map((item, index) => ( */}
            <img
              src={productData.image}
              onClick={() => setImage(productData.image)}
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
            />
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={productData.image} className="w-full h-auto" />
          </div>
        </div>

        {/* product info */}

        <div className="flex-1 ">
          <h1 className="font-medium text-2xl  mt-2">{productData.name}</h1>
          <div className=" flex items-center gap-1 mt-2">
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <img src={assets.star} alt="" className="w-3.5" />
            <p className="pl-22">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-600 md:w-4/5">
            {productData.description}
          </p>
          <button
            onClick={() => addToCart(productData.id)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-600 my-8"
          >
            Add to cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>1100% original</p>
            <p> Cash on Delivery</p>
            <p>Easy product exchange policy</p>
          </div>
        </div>
      </div>

      {/* description and review */}

      <div className="mt-20">
        {" "}
        <div className="flex gap-2 ">
          <b className="border px-5 py-3 text-sm border-gray-700/5 shadow-md">
            Description
          </b>

          <p className="border px-5 py-3 text-sm border-gray-700/5 shadow-md">
            Reviews
          </p>
        </div>
        <div className="flex flex-col gap-4  border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            quaerat blanditiis laudantium nemo excepturi, molestias ullam. Saepe
            rem quidem officia aperiam facilis. Dignissimos dolore cupiditate
            non nesciunt. Corrupti, dolor in!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            beatae odit in quo quos, repellendus error ipsa blanditiis
            perferendis repellat natus excepturi sint qui velit assumenda
            architecto quam laborum molestias.
          </p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
