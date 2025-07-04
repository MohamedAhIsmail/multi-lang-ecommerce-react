import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkMode() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  function handleDarkMode() {
    window.document.documentElement.classList.toggle("dark");
    setIsDarkMode((dark) => !dark);
  }

  return (
    <button
      className="bg-blue-600 text-white px-4 py-2"
      onClick={handleDarkMode}
    >
      {isDarkMode ? <HiMiniSun /> : <HiMiniMoon />}
    </button>
  );
}

export default DarkMode;
