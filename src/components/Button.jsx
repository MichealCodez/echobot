const Button = ({ text, color, width, height, radius, textSize }) => {
  return (
    <a
      href="#"
      className={`px-5 text-white flex justify-center items-center hover:scale-[1.05] ${
        radius ? radius : "rounded-[18px]"
      } ${height ? height : "h-[59px]"} ${color} ${
        width ? width : "w-[204px]"
      } ${textSize ? textSize : "text-[18px] text-semibold"}`}
    >
      {text}
    </a>
  );
};

export default Button;
