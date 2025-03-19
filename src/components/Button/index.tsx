type ButtonProps = {
  type?: "neutral" | "transparent" | "black" | "white" | "rounded";
  color?: string;
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  fullHeight?: boolean;
  children?: React.ReactNode;
};

const Button = ({
  type = "neutral",
  color,
  text,
  onClick,
  fullWidth,
  fullHeight,
  children,
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center rounded-[60px] px-3 text-sm md:text-md cursor-pointer";

  const stylesByType = {
    transparent:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white",
    neutral: "bg-baseBg hover:text-white hover:bg-black",
    white:
      "bg-white text-black hover:bg-black hover:text-white border border-white",
    black:
      "bg-black text-white hover:bg-white hover:text-black border border-black",

    rounded: "rounded-full w-full h-full",
  };

  const widthStyles = fullWidth ? "w-full" : "md:w-[218px]";

  const heightStyles = fullHeight ? "h-full" : "h-[52px]";

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={
        type != "rounded"
          ? `${baseStyles} ${stylesByType[type]} ${widthStyles} ${heightStyles}`
          : `${stylesByType[type]} `
      }
    >
      <div className="flex gap-3 justify-center">
        {text && <span>{text}</span>}
        {children}
      </div>
    </button>
  );
};

export default Button;
