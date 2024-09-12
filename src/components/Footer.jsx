import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-44 mb-20 text-sm">
        <div>
          <img src={assets.logo} className="mb-1 w-16" alt="" />
          <p className="w-ful md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius unde
            facere culpa, et cumque necessitatibus voluptates eveniet doloremque
            similique odit officiis, eaque asperiores totam enim quod pariatur
            praesentium at officia.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-700">
            <li>+48512452</li>
            <li>contact@ekart.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ecart.com</p>
      </div>
    </div>
  );
};

export default Footer;
