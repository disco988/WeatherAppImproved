const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md max-w-22"
    >
      {children}
    </button>
  );
};

export default Button;
