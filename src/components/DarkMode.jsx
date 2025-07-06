import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

import { useDarkMode } from "../context/DarkModeContext";

function DarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleDarkMode() {
    window.document.documentElement.classList.toggle("dark");
    setIsDarkMode((dark) => !dark);
  }

  return (
    <button
      className="cursor-pointer"
      onClick={handleDarkMode}
    >
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </button>
  );
}

export default DarkMode;
