const Button = ({ text, color }) => {
  return (
    <a
      href="#"
      className={`px-5 text-white flex justify-center items-center rounded-lg h-8 ${color}`}
    >
      {text}
    </a>
  );
};

export default Button;
