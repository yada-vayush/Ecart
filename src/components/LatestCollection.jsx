import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, SetLatestProduct] = useState([]);

  useEffect(() => {
    console.log(products);

    SetLatestProduct(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"Collection"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-slate-700 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          cupiditate iste perferendis vero impedit deserunt obcaecati quos est
          delectus? Autem eveniet ullam possimus nesciunt asperiores molestias
          iste officia, velit beatae.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
