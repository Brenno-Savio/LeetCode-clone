import { FC } from "react";
import { FaPlay } from "react-icons/fa";

interface Props {
  color: string;
  gradientColor: string;
}

const Card: FC<Props> = ({ color, gradientColor }) => {
  return (
    <div className="flex items-center justify-center transform">
      <div className="w-[325px] h-[375px] z-10 rounded-3xl shadow-lg ">
        <div className={`flex flex-col bg-gradient-to-b ${gradientColor} ${color} w-full h-[70%] rounded-t-3xl`}>
          <div className="w-[90%] h-[10%] flex flex-row mx-3 mt-5">
          <div className="bg-sky-200 w-[50%] h-[70%] rounded-lg mr-5"/>
          <div className="bg-sky-200 w-[30%] h-[70%] rounded-lg"/>
          </div>
          <div className="w-[90%] h-full flex flex-row">
          <div className="bg-sky-200 w-[50%] h-[20%] rounded-lg mt-5 ml-3"/>
          <div className="bg-sky-200 w-[90%] h-[20%] rounded-lg mt-5 ml-3"/>
          </div>
        </div>
        <div className="bg-slate-50 w-full h-[30%] rounded-b-3xl flex">
          <div className="bg-tertiary-alt h-[10%] w-[35%] m-4 rounded-lg" />
        </div>
      </div>
      <div className="bg-white absolute rounded-full w-[100px] h-[100px] mt-[132px] ml-[120px] shadow-lg z-20">
        <FaPlay  className="mt-[40px] ml-[40px] text-tertiary-alt text-2xl" />
      </div>
    </div>
  );
};

export default Card;
