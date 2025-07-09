// import { useLanguage } from "../hooks/useLanguage";
// import { HiChevronRight } from "react-icons/hi2";
// import { HiChevronLeft } from "react-icons/hi2";

function BannerBox({ banner }) {
  return (
    <div
      className={`${banner.background} rounded-lg p-4 flex items-center w-full`}
    >
      <div>
        <img src={banner.image} alt="" className="w-50" />
      </div>
      <div>
        <h2
          className="text-xl font-light"
          dangerouslySetInnerHTML={{ __html: banner.text }}
        />

        <div className={`${banner.btnColor} text-sm mt-2 text-tex`}>
          Shop Now
        </div>
      </div>
    </div>
  );
}

export default BannerBox;
