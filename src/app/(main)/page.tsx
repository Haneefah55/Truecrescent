
import { HiCheckBadge } from "react-icons/hi2";
import HomeHero from "../component/HomeHero";
import { HiBadgeCheck } from "react-icons/hi";
import { FaBus, FaCog, FaHeadset, FaTruck } from "react-icons/fa";



export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HomeHero />

      <div className="bg-gray-100 py-10 flex items-center justify-center flex-col md:flex-row" >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 ">
            <HiBadgeCheck  size={35} color="white" />
            <h3 className="font-medium text-sm">Premium Materials</h3>
            <p className="font-light text-center text-xs">Certified mills. Every batch inspected.</p>
          </div>
          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 ">
            <FaCog  size={35} color="white" />
            <h3 className="font-medium text-sm">Build to Last</h3>
            <p className="font-light text-center text-xs">High-grade steel for real job sites. </p>
          </div>

          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 ">
            <FaTruck  size={35} color="white" />
            <h3 className="font-medium text-sm">On-Time Delivery</h3>
            <p className="font-light text-center text-xs">Scheduled warehouse to site. No delays.</p>
          </div>
          <div className="w-35 h-35 bg-orange-600 text-white p-2 flex flex-col items-center justify-center gap-3 ">
            <FaHeadset  size={35} color="white" />
            <h3 className="font-medium text-sm">Expert Support</h3>
            <p className="font-light text-center text-xs">Steel specialist. Real people. Quick help.</p>
          </div>
          

        </div>

      </div>


      
    </div>
  );
}
