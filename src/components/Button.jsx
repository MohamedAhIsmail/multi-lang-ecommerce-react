function Button({ children }) {
  return (
    <button
      className={`text-white bg-[#F55266] px-3 py-2 md:px-4 md:py-2 rounded-md cursor-pointer hover:bg-[#f55265d4] transition-all duration-300 w-fit flex items-center gap-2`}
    >
      {children}
    </button>
  );
}

export default Button;
