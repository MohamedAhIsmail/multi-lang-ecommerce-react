import ipad from "../../assets/imageipad.png";
import appleWhite from "../../assets/applewhite.svg";
import appleBlack from "../../assets/appleblack.svg";
import { useDarkMode } from "../../context/DarkModeContext";

function IpadBannar() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="bg-[#FECDF2] dark:bg-[rgb(54,34,49)] px-4 pt-4 rounded-xl text-center flex  flex-col items-center justify-end gap-2 col-span-1">
      <div className="my-2">
        <img src={isDarkMode ? appleWhite : appleBlack} alt="Apple Logo" />
      </div>
      <div>
        <p className="dark:text-[#E0E5EB] text-sm ">Deal of the week</p>
        <h2 className="font-semibold text-heading text-2xl">iPad Pro M1</h2>
      </div>
      <div>
        <img src={ipad} alt="Ipad" />
      </div>
    </div>
  );
}

export default IpadBannar;
