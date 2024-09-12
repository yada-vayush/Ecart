import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-700 ">
      {/* left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-gray-600">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-gray-500"> </p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className=" sevillana-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrival
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Shop now</p>
            <p className="w-8 md:w-11 h-[2px] bg-gray-500"> </p>
          </div>
        </div>
      </div>
      {/* right side */}
      <img
        src={assets.hero}
        className="w-full  sm:w-1/2 hover:scale-110 transition ease-in-out "
        alt=""
        srcSet=""
      />
    </div>
  );
};

export default Hero;
