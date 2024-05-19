import { ArrowRightIcon } from "lucide-react";
import TypeSecondaryHovertrue from "./type-secondary-hovertrue";

const Header = () => {
  return (
    <div className="absolute h-[1.5%] w-full top-[0%] right-[0%] bottom-[98.5%] left-[0%] bg-gray-400 flex flex-row items-center justify-between py-5 px-[70px] box-border text-left text-5xl-9 text-neutral-01-100 font-dm-sans">
      <div className="flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start">
          <div className="w-[113px] relative h-[25.6px]">
            <div className="absolute top-[0px] left-[0px] w-[113px] h-[25.6px] flex flex-row items-center justify-center gap-[5.3px] cursor-pointer">
              <img
                className="w-[22.3px] relative h-[21.2px]"
                alt=""
                src="/group-3.svg"
              />
              <b className="w-[77.3px] relative tracking-[-0.75px] leading-[23.31px] flex items-center h-[19.1px] shrink-0">
                GenAI
              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-[20px] text-base font-poppins">
        <div className="flex flex-row items-start justify-start p-2.5 ">
          <div className="relative tracking-[-0.14px] leading-[20px] font-medium cursor-pointer hover:underline">
            Products
          </div>
        </div>
        <div className="flex flex-row items-start justify-start p-2.5">
          <div className="relative tracking-[-0.14px] leading-[20px] font-medium cursor-pointer hover:underline">
            About us
          </div>
        </div>
        <div className="flex flex-row items-start justify-start p-2.5">
          <div className="relative tracking-[-0.14px] leading-[20px] font-medium cursor-pointer hover:underline">
            Pricing
          </div>
        </div>
        <div className="flex flex-row items-start justify-start p-2.5">
          <div className="relative tracking-[-0.14px] leading-[20px] font-medium cursor-pointer hover:underline">
            FAQ
          </div>
        </div>
      </div>
      <div className="h-[43px] w-[120px] relative text-center text-sm font-lato cursor-pointer ">
        <div className="absolute top-[0px] left-[0px] rounded-3xl bg-mediumslateblue-400 box-border overflow-hidden flex flex-row items-start justify-start p-[13px] gap-[9px] w-full h-full border-[1px] border-solid border-gray-1300">
          <b className="relative leading-[100%] inline-block min-w-[73px] whitespace-nowrap">
            Get Started
          </b>
          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <img className="w-2.5 h-[9px] relative" alt="" />
          </div>
        </div>
        <img
          className="absolute top-[17px] left-[92px] w-[9.2px] h-[9px] z-[1]"
          alt=""
          src="/error-handler.svg"
        />
      </div>
    </div>
  );
};

export default Header;
