import { ArrowRightIcon } from "lucide-react";
import { useMemo } from "react";

const TypeSecondaryHovertrue = ({
  text = "Start your free trial",
  arrow = true,
  typeSecondaryHovertrueBorderRadius,
  typeSecondaryHovertrueBackgroundColor,
  typeSecondaryHovertrueBorder,
  typeSecondaryHovertrueHeight,
  typeSecondaryHovertrueWidth,
  typeSecondaryHovertruePosition,
  typeSecondaryHovertrueTop,
  typeSecondaryHovertrueLeft,
}) => {
  const typeSecondaryHovertrueStyle = useMemo(() => {
    return {
      borderRadius: typeSecondaryHovertrueBorderRadius,
      backgroundColor: typeSecondaryHovertrueBackgroundColor,
      border: typeSecondaryHovertrueBorder,
      height: typeSecondaryHovertrueHeight,
      width: typeSecondaryHovertrueWidth,
      position: typeSecondaryHovertruePosition,
      top: typeSecondaryHovertrueTop,
      left: typeSecondaryHovertrueLeft,
    };
  }, [
    typeSecondaryHovertrueBorderRadius,
    typeSecondaryHovertrueBackgroundColor,
    typeSecondaryHovertrueBorder,
    typeSecondaryHovertrueHeight,
    typeSecondaryHovertrueWidth,
    typeSecondaryHovertruePosition,
    typeSecondaryHovertrueTop,
    typeSecondaryHovertrueLeft,
  ]);

  return (
    <div
      className="rounded-[10px] bg-gray-1500 box-border h-[50px] overflow-hidden flex flex-row items-center justify-center py-[18px] px-6 gap-[10px] text-center text-sm text-neutral-01-100 font-lato border-[1px] border-solid border-neutral-01-100 cursor-pointer"
      style={typeSecondaryHovertrueStyle}
    >
      <b className="relative leading-[100%]">{text}</b>
      {arrow && <ArrowRightIcon />}
    </div>
  );
};

export default TypeSecondaryHovertrue;
