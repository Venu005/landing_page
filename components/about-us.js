import { useMemo } from "react";

const AboutUs = ({ propMinWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[15.5px] text-left text-xl-7 text-gray-700 font-inter">
      <div className="self-stretch rounded-[14.47px] bg-gray-1200 flex flex-col items-start justify-start p-[15.5px] gap-[10.3px] border-[1px] border-solid border-gray-1000">
        <div className="relative leading-[22.61px] font-semibold">About</div>
        <div className="flex flex-row items-start justify-start gap-[10.3px] text-lg-6 text-gray-800">
          <div className="relative leading-[22.61px] font-medium">
            Tell me a time you implement
          </div>
          <div className="relative [text-decoration:underline] leading-[22.61px]">
            see more...
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-[14.47px] bg-gray-1200 flex flex-col items-start justify-start p-[15.5px] text-xl-4 border-[1px] border-solid border-gray-1000">
        <div className="flex flex-row items-center justify-start gap-[15.5px]">
          <img
            className="w-[58.4px] relative h-[58.4px]"
            alt=""
            src="/vector-2.svg"
          />
          <div
            className="flex flex-col items-start justify-start gap-[10.3px]"
            style={frameDivStyle}
          >
            <div className="relative leading-[22.61px] font-semibold">
              lemlist
            </div>
            <div className="relative text-mid-3 leading-[19.25px] font-medium text-gray-800">
              Head of Growth
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-[4.1px] px-[26.9px]">
          <div className="w-[6.2px] relative rounded-[50%] bg-darkgray-200 h-[6.2px]" />
          <img
            className="w-[2.1px] relative max-w-full overflow-hidden h-[42.9px] shrink-0"
            alt=""
            src="/vector-468-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
