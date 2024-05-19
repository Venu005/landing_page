import Header from "../components/header";
import AboutUs from "../components/about-us";
import FrameComponent2 from "../components/frame-component2";
import FAQRight from "../components/f-a-q-right";
import FrameComponent1 from "../components/frame-component1";
import TypeSecondaryHovertrue from "../components/type-secondary-hovertrue";
import FrameComponent from "../components/frame-component";
import { UserPlus2 } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-gray-200 h-[6589px] overflow-hidden text-left text-sm text-neutral-01-100 font-inter">
      <img
        className="absolute h-[calc(100%_-_5499px)] w-full top-[0px] right-[0px] bottom-[5499px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/image@2x.png"
      />
      <Header />
      <img
        className="absolute top-[136px] left-[718px] rounded-[20px] w-[1024px] h-[540.8px] object-cover"
        alt=""
        src="/hero-primary-image@2x.png"
      />
      <div className="absolute top-[192px] left-[130px] w-[493px] flex flex-col items-start justify-start gap-[36px]">
        <div className="rounded-[12.8px] bg-gray-300 flex flex-row items-start justify-start py-1 px-4 text-center cursor-pointer">
          <div className="flex flex-row items-start justify-start gap-[3.6px]">
            <div className="relative leading-[20px]">{`AI generation `}</div>
            <img
              className="w-4 relative h-5 overflow-hidden shrink-0"
              alt=""
              src="/svgh5.svg"
            />
          </div>
        </div>
        <b className="self-stretch relative text-[70px] tracking-[-2.2px] leading-[120%] text-ghostwhite">
          <p className="m-0">{`Generate apps `}</p>
          <p className="m-0">with ease</p>
        </b>
        <div className="self-stretch relative text-xl tracking-[-0.01em] leading-[26px] text-gainsboro-100">
          Lorem ipsum dolor sit amet lorem
        </div>
      </div>
      <div className="absolute top-[826.8px] left-[355px] flex flex-row items-center justify-center gap-[99.7px] opacity-[0.7]">
        <img
          className="w-[124px] relative h-[28.8px] object-cover"
          alt=""
          src="/company-logo@2x.png"
        />
        <img
          className="w-[66.6px] relative h-[23.1px] object-contain"
          alt=""
          src="/company-logo-1@2x.png"
        />
        <img
          className="w-[117.9px] relative h-[21.6px] object-contain"
          alt=""
          src="/group-2@2x.png"
        />
        <img
          className="w-[117.6px] relative h-[20.1px] object-contain"
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className="absolute top-[1006px] left-[150px] w-[1150px] flex flex-col items-center justify-start gap-[80px] text-center text-37xl">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 pb-10">
            <h1 className="m-0 w-[946px] relative text-inherit tracking-[-0.02em] leading-[110%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(-200deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-19xl mq450:leading-[31px] mq1050:text-32xl mq1050:leading-[41px]">
              Revolutionalize your workflow
            </h1>
          </div>
          <div className="w-[645px] relative text-5xl leading-[170%] inline-block">
            Generate highly personalized icebreakers and complete sequences
            based on your prospects' information.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[104px] text-left text-base-5 text-gray-700">
          <div className="w-[545.4px] relative h-[469.6px]">
            <div className="absolute top-[0.9px] left-[27.3px] rounded-[14.47px] bg-gray-100 box-border w-[490.8px] h-[402px] overflow-hidden flex flex-row items-start justify-start p-[20.7px] gap-[10.3px] border-[1px] border-solid border-gray-1000">
              <div className="flex-1 flex flex-col items-start justify-start gap-[40.3px] z-[0]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[20.7px]">
                  <img
                    className="w-[111.6px] relative rounded-74xl h-[111.6px] object-cover"
                    alt=""
                    src="/1668433860333-1-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10.3px]">
                    <div className="relative text-xl-4 leading-[22.61px] font-semibold">
                      Kévin Moënne-Loccoz
                    </div>
                    <div className="relative leading-[22.61px] font-medium text-gray-600">
                      500+connections
                    </div>
                    <div className="rounded-[103.33px] bg-cornflowerblue flex flex-row items-center justify-start py-[10.3px] px-[15.5px] gap-[8.3px] text-center text-neutral-01-100 font-font-awesome-6-pro">
                      <div className="w-[16.5px] relative h-[16.5px]">
                        <div className="absolute top-[calc(50%_-_8.55px)] left-[calc(50%_-_8.55px)] flex items-center justify-center w-[16.5px] h-[16.5px]">
                          <UserPlus2 />
                        </div>
                      </div>
                      <b className="relative tracking-[-0.02em] font-inter">
                        Connect
                      </b>
                    </div>
                  </div>
                </div>
                <AboutUs />
              </div>
              {/* <div className="w-[37.2px] absolute !m-[0] top-[14.3px] left-[438.1px] h-[33.8px] z-[1]">
                <div className="absolute top-[2px] left-[2.7px] bg-neutral-01-100 w-[31.8px] h-[29.9px]" />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-2520-1.svg"
                />
              </div> */}
            </div>
            <div className="absolute top-[24px] left-[13.6px] rounded-[15.27px] bg-gray-100 box-border w-[518.1px] h-[424.3px] overflow-hidden flex flex-row items-start justify-start p-[21.8px] gap-[10.9px] text-mid-5 border-[1.1px] border-solid border-gray-1000">
              <div className="flex-1 flex flex-col items-start justify-start gap-[42.5px] z-[0]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[21.8px]">
                  <img
                    className="w-[117.8px] relative rounded-[98.17px] h-[117.8px] object-cover"
                    alt=""
                    src="/1668433860333-1-2@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10.9px]">
                    <div className="relative text-2xl-5 leading-[23.87px] font-semibold">
                      Kévin Moënne-Loccoz
                    </div>
                    <div className="relative leading-[23.87px] font-medium text-gray-600">
                      500+connections
                    </div>
                    <div className="rounded-[109.07px] bg-cornflowerblue flex flex-row items-center justify-start py-[10.9px] px-[16.4px] gap-[8.7px] text-center text-neutral-01-100 font-font-awesome-6-pro">
                      <div className="w-[17.5px] relative h-[17.5px]">
                        <div className="absolute top-[calc(50%_-_8.45px)] left-[calc(50%_-_8.45px)] flex items-center justify-center w-[17.5px] h-[17.5px]">
                          <UserPlus2 />
                        </div>
                      </div>
                      <b className="relative tracking-[-0.02em] font-inter">
                        Connect
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.4px] text-2xl-8">
                  <div className="self-stretch rounded-[15.27px] bg-gray-1200 flex flex-col items-start justify-start p-[16.4px] gap-[10.9px] border-[1.1px] border-solid border-gray-1000">
                    <div className="relative leading-[23.87px] font-semibold">
                      About
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[10.9px] text-lgi-6 text-gray-800">
                      <div className="relative leading-[23.87px] font-medium">
                        Tell me a time you implement
                      </div>
                      <div className="relative [text-decoration:underline] leading-[23.87px]">
                        see more...
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-[15.27px] bg-gray-1200 flex flex-col items-start justify-start p-[16.4px] text-2xl-5 border-[1.1px] border-solid border-gray-1000">
                    <div className="flex flex-row items-center justify-start gap-[16.4px]">
                      <img
                        className="w-[61.6px] relative h-[61.6px]"
                        alt=""
                        src="/vector-3.svg"
                      />
                      <div className="flex flex-col items-start justify-start gap-[10.9px]">
                        <div className="relative leading-[23.87px] font-semibold">
                          lemlist
                        </div>
                        <div className="relative text-lg-3 leading-[20.32px] font-medium text-gray-800">
                          Head of Growth
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[4.4px] px-[28.4px]">
                      <div className="w-[6.5px] relative rounded-[50%] bg-darkgray-200 h-[6.5px]" />
                      <img
                        className="w-[2.2px] relative max-w-full overflow-hidden h-[45.3px] shrink-0"
                        alt=""
                        src="/vector-468-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-[39.3px] absolute !m-[0] top-[15.1px] left-[462.5px] h-[35.7px] z-[1]">
                <div className="absolute top-[2.1px] left-[2.9px] bg-neutral-01-100 w-[33.5px] h-[31.6px]" />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-2520-2.svg"
                />
              </div> */}
            </div>
            <div className="absolute top-[57px] left-[0px] rounded-[16.07px] bg-gray-100 box-border w-[545.4px] h-[422.5px] overflow-hidden flex flex-row items-start justify-start p-[23px] gap-[11.5px] text-lg-4 border-[1.1px] border-solid border-gray-1000">
              <div className="flex-1 flex flex-col items-start justify-start gap-[44.8px] z-[0]">
                <div className="self-stretch flex flex-row items-center justify-start gap-[23px]">
                  <img
                    className="w-[124px] relative rounded-[103.33px] h-[124px] object-cover"
                    alt=""
                    src="/1668433860333-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[11.5px]">
                    <div className="relative text-3xl-6 leading-[25.13px] font-semibold">
                      George repliner
                    </div>
                    <div className="relative leading-[25.13px] font-medium text-gray-600">
                      500+connections
                    </div>
                    <div className="rounded-[114.82px] bg-darkorchid flex flex-row items-center justify-start py-[11.5px] px-[17.2px] gap-[9.2px] text-center text-neutral-01-100 font-font-awesome-6-pro">
                      <div className="w-[18.4px] relative h-[18.4px]">
                        <div className="absolute top-[calc(50%_-_9.4px)] left-[calc(50%_-_9.4px)] flex items-center justify-center w-[18.4px] h-[18.4px]">
                          <UserPlus2 />
                        </div>
                      </div>
                      <b className="relative tracking-[-0.02em] font-inter">
                        Connect
                      </b>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[17.2px] text-4xl">
                  <div className="self-stretch rounded-[16.07px] bg-gray-1200 flex flex-col items-start justify-start p-[17.2px] gap-[11.5px] border-[1.1px] border-solid border-gray-1000">
                    <div className="relative leading-[25.13px] font-semibold">
                      About
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[11.5px] text-xl-7 text-gray-800">
                      <div className="relative leading-[25.13px] font-medium">
                        Let’s generate ou an AI app
                      </div>
                      <div className="relative [text-decoration:underline] leading-[25.13px]">
                        see more...
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-[16.07px] bg-gray-1200 flex flex-col items-start justify-start p-[17.2px] text-3xl-6 border-[1.1px] border-solid border-gray-1000">
                    <div className="flex flex-row items-center justify-start gap-[17.2px]">
                      <img
                        className="w-[64.9px] relative h-[64.9px]"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <div className="flex flex-col items-start justify-start gap-[11.5px]">
                        <div className="relative leading-[25.13px] font-semibold">
                          Aisickle
                        </div>
                        <div className="relative text-lgi-3 leading-[21.39px] font-medium text-gray-800">
                          Head of development
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-[4.6px] px-[29.9px]">
                      <div className="w-[6.9px] relative rounded-[50%] bg-darkgray-200 h-[6.9px]" />
                      <img
                        className="w-[2.3px] relative max-w-full overflow-hidden h-[47.6px] shrink-0"
                        alt=""
                        src="/vector-468.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[41.3px] absolute !m-[0] top-[15.2px] left-[486.8px] h-[41.3px] z-[1]">
                <div className="absolute top-[2.9px] left-[3px] bg-neutral-01-100 w-[35.3px] h-[33.3px]" />
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/path-2520.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-2xl bg-gray-500 flex flex-col items-start justify-start py-12 px-[39px] gap-[32px] text-13xl text-neutral-01-100 border-[1px] border-solid border-gray-1000">
            <div className="w-[422px] relative leading-[44px] font-semibold inline-block h-[89px] shrink-0">
              Generate AI apps without any extra effort
            </div>
            <div className="w-[422px] relative text-base leading-[170%] text-gainsboro-200 flex items-center">
              <span className="w-full">
                <p className="m-0">
                  Our world-class market making services are proven to help
                  local and emerging exchanges win traders and gain
                  market-leading positions of up to 90% market dominance.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Lorem ipsum dolor sit amet with the one and only ai apps that
                  you like lorem ipsum dolor sit amet lorem ipsum dolor sit amet
                  lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2902px] left-[157px] w-[1150px] flex flex-col items-center justify-start gap-[80px] text-center text-45xl">
        <div className="flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 pb-10">
            <h1 className="m-0 w-[500px] relative text-inherit tracking-[-0.02em] leading-[110%] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(-200deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq450:text-19xl mq450:leading-[31px] mq1050:text-32xl mq1050:leading-[41px]">
              Unlease the power of AI
            </h1>
          </div>
          <div className="w-[729px] relative text-5xl leading-[170%] inline-block">
            Automatically generate high-quality sequences uniquely crafted for
            your value proposition and your target prospects.
          </div>
        </div>
        <FrameComponent2 />
      </div>
      <div className="absolute top-[4860px] left-[165px] w-[1150px] flex flex-row items-start justify-start gap-[112px] text-[68.6px]">
        <div className="flex flex-col items-start justify-start min-w-[392px] max-w-full lg:flex-1 mq450:gap-[28px] mq750:min-w-full">
          <b className="relative leading-[77.29px] text-transparent !bg-clip-text [background:linear-gradient(150deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-22xl mq450:leading-[46px] mq1050:text-36xl mq1050:leading-[62px]">
            <p className="m-0">Frequently</p>
            <p className="m-0">Asked</p>
            <p className="m-0">Questions</p>
          </b>
        </div>
        <div className="flex flex-col items-start justify-start">
          <FAQRight />
        </div>
      </div>
      <div className="absolute top-[6276px] left-[125px] flex flex-col items-center justify-start gap-[34px] text-base text-darkgray-100">
        <div className="flex flex-row items-start justify-start gap-[24px]">
          <div className="w-[60px] shadow-[0px_1px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.08)_inset] rounded-81xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0))] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[18px] box-border max-w-[312px]">
            <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-[60px]">
              <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[3px] px-px box-border cursor-pointer">
                <img
                  className="w-[22px] relative h-[18px]"
                  alt=""
                  src="/vector-7.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[60px] shadow-[0px_1px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.08)_inset] rounded-81xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0))] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[18px] box-border max-w-[312px]">
            <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-[60px]">
              <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-start p-0.5 box-border cursor-pointer">
                <img className="w-5 relative h-5" alt="" src="/vector-8.svg" />
              </div>
            </div>
          </div>
          <div className="w-[60px] shadow-[0px_1px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.08)_inset] rounded-81xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0))] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[18px] box-border max-w-[312px]">
            <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-[60px]">
              <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-start p-0.5 box-border cursor-pointer">
                <img className="w-5 relative h-5" alt="" src="/vector-9.svg" />
              </div>
            </div>
          </div>
          <div className="w-[60px] shadow-[0px_1px_0px_rgba(255,_255,_255,_0.08)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.08)_inset] rounded-81xl [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.08),_rgba(255,_255,_255,_0))] overflow-hidden shrink-0 flex flex-row items-center justify-center p-[18px] box-border max-w-[312px]">
            <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-center max-w-[60px]">
              <div className="w-6 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[3px] px-0.5 box-border cursor-pointer">
                <img
                  className="w-5 relative h-[18px]"
                  alt=""
                  src="/vector-10.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1120px] box-border h-[218.6px] flex flex-col items-center justify-center pt-[49px] pb-[63.8px] pr-[266.1px] pl-[266px] gap-[48px] border-t-[1px] border-solid border-gray-1400">
          <div className="w-[587.9px] relative h-[28.8px]">
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_542.9px)] top-[0px] right-[542.9px] bottom-[-0.2px] left-[0px] flex flex-row items-start justify-start text-neutral-01-100">
              <div className="relative leading-[28.8px]">Home</div>
            </div>
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_535.9px)] top-[0px] right-[459.3px] bottom-[-0.2px] left-[76.6px] flex flex-row items-start justify-start">
              <div className="relative leading-[28.8px]">Pricing</div>
            </div>
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_556.9px)] top-[0px] right-[396.5px] bottom-[-0.2px] left-[160.4px] flex flex-row items-start justify-start">
              <div className="relative leading-[28.8px]">FAQ</div>
            </div>
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_505.9px)] top-[0px] right-[283.1px] bottom-[-0.2px] left-[222.8px] flex flex-row items-start justify-start">
              <div className="relative leading-[28.8px]">Changelog</div>
            </div>
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_528.9px)] top-[0px] right-[192.5px] bottom-[-0.2px] left-[336.4px] flex flex-row items-start justify-start">
              <div className="relative leading-[28.8px]">License</div>
            </div>
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_540.9px)] top-[0px] right-[102.9px] bottom-[-0.2px] left-[438px] flex flex-row items-start justify-start">
              <div className="relative leading-[28.8px]">Terms</div>
            </div>
            <div className="absolute h-[calc(100%_+_0.2px)] w-[calc(100%_-_526.9px)] top-[0px] right-[-0.9px] bottom-[-0.2px] left-[527.8px] flex flex-row items-start justify-start">
              <div className="relative leading-[28.8px]">Contact</div>
            </div>
          </div>
          <div className="w-[461.8px] flex flex-row items-start justify-center max-w-[492px] text-center text-dimgray">
            <div className="relative leading-[28.8px]">
              © 2020 – 2022 1811 Labs. All rights reserved.
            </div>
          </div>
        </div>
      </div>
      <FrameComponent1 />
      <TypeSecondaryHovertrue
        text="Start your free trial"
        arrow
        typeSecondaryHovertrueBorderRadius="25px"
        typeSecondaryHovertrueBackgroundColor="rgba(111, 107, 255, 0.8)"
        typeSecondaryHovertrueBorder="1px solid rgba(255, 255, 255, 0.27)"
        typeSecondaryHovertrueHeight="50px"
        typeSecondaryHovertrueWidth="unset"
        typeSecondaryHovertruePosition="absolute"
        typeSecondaryHovertrueTop="521px"
        typeSecondaryHovertrueLeft="130px"
      />
      <div className="absolute top-[5747px] left-[339px] flex flex-col items-center justify-start text-center text-[60px]">
        <div className="w-[691px] flex flex-col items-center justify-center gap-[32px]">
          <div className="self-stretch flex flex-col items-center justify-start relative gap-[24px]">
            <div className="self-stretch relative leading-[120%] font-semibold z-[0]">
              Be part of the future of AI tools
            </div>
            <div className="self-stretch relative text-xl leading-[32px] text-thistle z-[1]">
              Unleash the power of AI within Brainwave. Upgrade your
              productivity with Brainwave, the open AI chat app.
            </div>
            <img
              className="w-[311px] absolute !m-[0] top-[144px] left-[187px] rounded h-2 z-[2]"
              alt=""
              src="/vector-21.svg"
            />
          </div>
          <div className="w-[120px] h-10" />
        </div>
        <TypeSecondaryHovertrue
          text="Start your free trial"
          arrow
          typeSecondaryHovertrueBorderRadius="25px"
          typeSecondaryHovertrueBackgroundColor="rgba(111, 107, 255, 0.8)"
          typeSecondaryHovertrueBorder="1px solid rgba(255, 255, 255, 0.27)"
          typeSecondaryHovertrueHeight="50px"
          typeSecondaryHovertrueWidth="unset"
          typeSecondaryHovertruePosition="unset"
          typeSecondaryHovertrueTop="unset"
          typeSecondaryHovertrueLeft="unset"
        />
      </div>
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
