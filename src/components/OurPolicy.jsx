import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Easy Exchange policy</p>
        <p className="text-gray-500">We Offer hasske free exchange policy</p>
      </div>
      <div>
        <img src={assets.quality} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">10 days return policy</p>
        <p className="text-gray-500">We Offer 10 days free return policy</p>
      </div>
      <div>
        <img src={assets.support} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-500">We provide 24x7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
