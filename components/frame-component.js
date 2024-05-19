import PricingBlock from "./pricing-block";

const FrameComponent = () => {
  return (
    <div className="absolute top-[3794px] left-[141px] w-[1174px] flex flex-col items-center justify-start gap-[80px] text-center text-45xl text-neutral-01-100 font-inter">
      <div className="flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 pb-10">
          <h1 className="m-0 w-[946px] relative text-inherit tracking-[-0.02em] leading-[110%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(8deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-19xl mq450:leading-[31px] mq1050:text-32xl mq1050:leading-[41px]">
            Get everything to build your app
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-left text-13xl">
        <PricingBlock basic="Basic" prop="0" />
        <div className="flex-1 relative rounded-13xl bg-gray-1100 box-border h-[760px] overflow-hidden border-[1px] border-solid border-neutral-01-5">
          <div className="absolute top-[72px] left-[32px] w-[331px] flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative leading-[48px] font-medium">
              Premium
            </div>
            <div className="self-stretch relative text-xl leading-[130%] text-thistle">
              Advanced AI chatbot, priority support, analytics dashboard
            </div>
          </div>
          <div className="absolute top-[212px] left-[32px] w-[331px] h-[88px] text-21xl font-h3-l">
            <div className="absolute top-[14px] left-[0px] leading-[60px]">
              $
            </div>
            <div className="absolute top-[0px] left-[27px] leading-[88px] font-semibold font-inter text-center">
              9.99
            </div>
          </div>
          <div className="absolute top-[300px] left-[32px] w-[331px] h-[116px] flex flex-row items-center justify-start text-base font-aeonik">
            <div className="flex-1 [backdrop-filter:blur(4px)] rounded-xl bg-mediumslateblue-400 box-border h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-5 border-[1.4px] border-solid border-mistyrose">
              <div className="relative leading-[100%] font-medium">
                Get Started
              </div>
            </div>
          </div>
          <div className="absolute top-[440px] left-[32px] w-[331px] flex flex-col items-start justify-start text-xl text-thistle">
            <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px]">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/checkmarkcircle01.svg"
              />
              <div className="flex-1 relative leading-[140%]">
                Type of threat
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-5 px-0 gap-[16px] border-t-[1px] border-solid border-neutral-01-5">
              <img
                className="w-6 relative h-6"
                alt=""
                src="/checkmarkcircle01.svg"
              />
              <div className="flex-1 relative leading-[140%]">
                Online presence
              </div>
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
        <PricingBlock basic="Enterprise" prop="20.99" propWidth="370px" />
      </div>
    </div>
  );
};

export default FrameComponent;
