const Button = ({ children, variant, size }) => {
  const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-400 text-white",
    danger: "bg-red-400 text-white",
  };

  const defaultStyle = "bg-gray-500 text-white px-2 py-2";

  const sizeStyles = {
    md: "px-5 py-1.5",
    sm: "px-3 py-1",
    lg: "px-6 py-2",
  };

  return (
    <button
      className={`${variantStyles[variant] || defaultStyle} ${
        sizeStyles[size]
      } rounded-sm cursor-pointer`}
    >
      {children}
    </button>
  );
};

export default Button;
