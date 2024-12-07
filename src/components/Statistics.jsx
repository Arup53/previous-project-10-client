import CountUp from "react-countup";
import { BsGlobe } from "react-icons/bs";
import { LuFileCheck2 } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { useAuthContext } from "../context/AuthProvider";

function Statistics() {
  const { theme } = useAuthContext();
  const background = theme === "light" ? "bg-blue-900/40" : "bg-gray-600";
  return (
    <div className="flex justify-center items-center mt-6 py-12 ">
      <div className="grid grid-cols-1  md:grid-cols-3  gap-1 md:gap-12 md:px-12 md:py-24">
        {/* card-1 */}
        <div
          className={`h-[300px]  w-full   ${background} flex flex-col items-center justify-center px-12 `}
        >
          <p className="text-white text-center text-4xl md:pt-12  ">
            <CountUp end={3} start={0} />
            K+
          </p>
          <p className="text-white text-center text-lg my-4 ">
            Global Partners
          </p>
          <div className="text-white flex justify-center text-6xl  my-4 ">
            <BsGlobe />
          </div>
        </div>
        {/* card-2 */}
        <div
          className={`h-[300px]  w-full ${background} flex flex-col items-center justify-center px-12`}
        >
          <p className="text-white text-center text-4xl md:pt-12">
            <CountUp end={900} start={0} />
          </p>
          <p className="text-white text-center text-lg my-4 ">
            Projects Completed
          </p>
          <div className="text-white flex justify-center text-6xl  my-4 ">
            <LuFileCheck2 />
          </div>
        </div>
        {/* card-3 */}
        <div
          className={`h-[300px]   w-full  ${background} flex flex-col items-center justify-center px-12`}
        >
          <p className="text-white text-center text-4xl md:pt-12 ">
            <CountUp end={100} start={0} />+
          </p>
          <p className="text-white text-center text-lg my-4 ">Monthly Donate</p>
          <div className="text-white flex justify-center text-6xl  my-4 ">
            <TbPigMoney />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
