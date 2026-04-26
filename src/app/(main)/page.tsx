import Image from "next/image";
import bg from "../../public/images/herobg.jpg"
import Navbar from "../component/Navbar";
import HomeHero from "../component/HomeHero";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <HomeHero />
      
    </div>
  );
}
