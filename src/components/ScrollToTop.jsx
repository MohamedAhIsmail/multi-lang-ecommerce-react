import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

function ScrollToTop() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed transition-all duration-300 ease-in-out 
        right-1 top-[50%] translate-y-[-50%] rotate-270 
        items-center text-sm border rounded-full px-2 py-1 
        cursor-pointer z-10 bg-white text-slate-950 
        dark:bg-[#181D25] dark:text-white 
        ${show ? "opacity-100  scale-100" : "opacity-0 scale-95"}
        flex
      `}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      {language === "en" ? (
        <>
          {t("scrollTo")} <HiMiniArrowSmallRight size={18} />
        </>
      ) : (
        <>
          <HiMiniArrowSmallRight size={18} /> {t("scrollTo")}
        </>
      )}
    </div>
  );
}

export default ScrollToTop;
