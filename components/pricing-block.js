import { useMemo } from "react";

const PricingBlock = ({ basic, prop, propWidth }) => {
  const pricingBlockStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="w-[361px] rounded-13xl bg-gray-1100 box-border h-[635px] overflow-hidden shrink-0 flex flex-col items-start justify-center p-8 gap-[24px] text-left text-13xl text-neutral-01-100 font-inter border-[1px] border-solid border-neutral-01-5"
      style={pricingBlockStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
        <div className="self-stretch relative leading-[48px] font-medium">
          {basic}
        </div>
        <div className="self-stretch relative text-xl leading-[130%] text-thistle">
          AI chatbot, personalized recommendations
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-21xl font-h3-l">
        <div className="relative leading-[60px]">$</div>
        <div className="relative leading-[88px] font-semibold font-inter text-center">
          {prop}
        </div>
      </div>
      <div className="self-stretch [backdrop-filter:blur(48px)] rounded-xl bg-gray-900 box-border h-[51.1px] flex flex-row items-center justify-center py-2.5 px-5 relative gap-[6px] text-base font-aeonik border-[1.5px] border-solid border-gray-1000">
        <div className="flex flex-row items-center justify-start z-[0]">
          <div className="relative leading-[100%] font-medium">Get Started</div>
        </div>
        <img
          className="w-[calc(100%_-_0.1px)] absolute !m-[0] h-[calc(100%_-_0.1px)] top-[0px] right-[0.1px] bottom-[0.1px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          alt=""
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-xl text-thistle">
        <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px]">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/checkmarkcircle01.svg"
          />
          <div className="flex-1 relative leading-[140%]">Type of threat</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px] border-t-[1px] border-solid border-neutral-01-5">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/checkmarkcircle01.svg"
          />
          <div className="flex-1 relative leading-[140%]">Online presence</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px] border-t-[1px] border-solid border-neutral-01-5">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/checkmarkcircle01.svg"
          />
          <div className="flex-1 relative leading-[140%]">
            Access to all modules
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px] border-t-[1px] border-solid border-neutral-01-5">
          <img
            className="w-6 relative h-6"
            alt=""
            src="/checkmarkcircle01.svg"
          />
          <div className="flex-1 relative leading-[140%]">Notability</div>
        </div>
      </div>
    </div>
  );
};

export default PricingBlock;
