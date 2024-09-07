import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";
import "../../styles/card.css";
import { MarketingNavigation } from "../navigations/MarketingNav";
import { Cards } from "./Cards";
import { Quotes } from "./Quotes";

export const Hero: React.FC = () => {
  return (
    <section className="p-28 h-screen bg-black bg-hero-bg relative">
      <Quotes />
      <MarketingNavigation />
      <div className="flex md:justify-between justify-center">
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="text-neutral-100 text-3xl sm:text-4xl lg:text-6xl text-center md:text-start">
            Create your way with Future!
          </h1>
          <div className="text-neutral-100 bg-sky-950 rounded-full flex justify-between py-1 items-center px-6 border border-sky-800">
            <p className="flex items-center gap-4">
              Read More <FaArrowDown />
            </p>
            <span className="font-semibold">&</span>
            <Link
              href="/login"
              className="py-2 px-8 border border-sky-800 rounded-full hover:bg-sky-800 transition ease-in-out"
            >
              Join us!
            </Link>
          </div>
        </div>
        <Cards />
      </div>
    </section>
  );
};
