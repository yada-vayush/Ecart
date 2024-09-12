import { assets } from "../assets/assets";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full  md:max-w-[480px]" src={assets} />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="text-gray-500">Oure Store</p>
          <p className="text-gray-500">Address</p>
          <p className="text-gray-500">Phone number</p>
          <p className="text-gray-500">Careers at Forever</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
