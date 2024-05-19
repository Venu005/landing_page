const FileHandler = ({ whatsTheImpactOfAIOnProsp, className }) => {
  return (
    <div
      className={`w-[646px] rounded-sm bg-gray-1200 box-border flex flex-col items-start justify-start py-[25px] px-4 text-left text-lg text-neutral-01-100 font-poppins border-[1px] border-solid border-mediumslateblue-300 ${className}`}
    >
      <div className="w-[593px] flex flex-row items-center justify-between">
        <div className="relative leading-[24.55px] font-medium">
          {whatsTheImpactOfAIOnProsp}
        </div>
        <img
          className="w-3.5 relative rounded-12xs h-3.5"
          alt=""
          src="/socket-communicator.svg"
        />
      </div>
    </div>
  );
};

export default FileHandler;
