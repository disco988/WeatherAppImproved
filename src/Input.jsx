const Input = ({ value, onChange, onKeyDown }) => {
  return (
    <input
      className=" w-1/3 min-w-0 rounded-md bg-white px-3.5 py-2 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Enter the city name!"
    />
  );
};

export default Input;
