const Button = ({ children, variant = "primary", onClick, type = "button" }) => {
  const base = "inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg cursor-pointer transition-all duration-200 border";

  const variants = {
    primary: "bg-blue-600 text-white border-transparent hover:bg-blue-700 hover:-translate-y-0.5",
    outline:  "bg-white text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400",
    black:    "bg-gray-900 text-white border-transparent hover:bg-gray-800 hover:-translate-y-0.5",
  };

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;