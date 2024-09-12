import { assets } from "../assets/assets";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />{" "}
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-6">
        <img src={assets} className="w-full md:max-w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vero accusantium hic illo corrupti numquam autem, error nulla culpa
            minus natus, vitae inventore maiores aliquid aperiam! Quisquam
            numquam suscipit repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            corrupti eligendi ut, perferendis voluptates natus tempora labore
            cumque omnis blanditiis quaerat, quo vitae animi. Nam enim
            laboriosam autem accusamus alias?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
