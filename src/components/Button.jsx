const Button = ({ text, color, width }) => {
  return (
    <a
      href="#"
      className={`px-5 text-white flex justify-center items-center rounded-lg h-8 ${color} ${width}`}
    >
      {text}
    </a>
  );
};

export default Button;
