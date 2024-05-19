const FrameComponent2 = () => {
  return (
    <div className="w-[926px] rounded-11xl bg-gray-1200 box-border flex flex-col items-start justify-start pt-[50px] px-[50px] pb-16 relative gap-[50px] text-left text-21xl font-manrope border-[1.5px] border-solid border-gray-1000">
      <div className="w-[901px] absolute !m-[0] bottom-[50.2px] left-[calc(50%_-_450px)] [filter:blur(224px)] rounded-[50%] bg-mediumslateblue-100 h-[130px] z-[0]" />
      <div className="relative tracking-[-0.02em] font-semibold text-transparent !bg-clip-text [background:linear-gradient(155.16deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0.6px_0_0_rgba(255,_255,_255,_0.59),_0_0.6px_0_rgba(255,_255,_255,_0.59),_-0.6px_0_0_rgba(255,_255,_255,_0.59),_0_-0.6px_0_rgba(255,_255,_255,_0.59)] z-[1]">
        Results from outreach
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] z-[2] text-13xl">
        <div className="flex flex-row items-center justify-start gap-[30px]">
          <div className="shadow-[0px_0px_7.86px_rgba(49,_107,_255,_0.25),_0px_0px_52.76px_rgba(49,_107,_255,_0.09)_inset] rounded-[9.35px] bg-red-200 flex flex-row items-start justify-start py-[11px] px-[25px] border-[1.1px] border-solid border-red-100">
            <div className="relative tracking-[-0.02em] font-semibold text-transparent !bg-clip-text [background:linear-gradient(155.16deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0.6px_0_0_rgba(255,_255,_255,_0.59),_0_0.6px_0_rgba(255,_255,_255,_0.59),_-0.6px_0_0_rgba(255,_255,_255,_0.59),_0_-0.6px_0_rgba(255,_255,_255,_0.59)]">
              without AI
            </div>
          </div>
          <div className="relative tracking-[-0.02em] font-semibold text-transparent !bg-clip-text [background:linear-gradient(155.16deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0.6px_0_0_rgba(255,_255,_255,_0.59),_0_0.6px_0_rgba(255,_255,_255,_0.59),_-0.6px_0_0_rgba(255,_255,_255,_0.59),_0_-0.6px_0_rgba(255,_255,_255,_0.59)]">
            5% reply rate
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[30px]">
          <div className="flex-1 shadow-[0px_0px_7.86px_rgba(49,_107,_255,_0.25),_0px_0px_52.76px_rgba(49,_107,_255,_0.09)_inset] rounded-[9.35px] bg-mediumslateblue-200 flex flex-row items-start justify-start py-[11px] px-[25px] border-[1.1px] border-solid border-lemlist-primary-lightmode-300">
            <div className="relative tracking-[-0.02em] font-semibold text-transparent !bg-clip-text [background:linear-gradient(155.16deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0.6px_0_0_rgba(255,_255,_255,_0.59),_0_0.6px_0_rgba(255,_255,_255,_0.59),_-0.6px_0_0_rgba(255,_255,_255,_0.59),_0_-0.6px_0_rgba(255,_255,_255,_0.59)]">
              with AI
            </div>
          </div>
          <div className="relative tracking-[-0.02em] font-semibold text-transparent !bg-clip-text [background:linear-gradient(155.16deg,_#fff,_rgba(255,_255,_255,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] [text-shadow:0.6px_0_0_rgba(255,_255,_255,_0.59),_0_0.6px_0_rgba(255,_255,_255,_0.59),_-0.6px_0_0_rgba(255,_255,_255,_0.59),_0_-0.6px_0_rgba(255,_255,_255,_0.59)]">
            15% reply rate
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
