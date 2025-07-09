import BannerBox from "./BannerBox";

const banners = [
  {
    image: "src/assets/cam.webp",
    background: "bg-banner-blue",
    btnColor: "text-text-blue",
    textKey: "banners.0.text",
  },
  {
    image: "src/assets/smart.webp",
    background: "bg-banner-orange",
    btnColor: "text-text-orange",
    textKey: "banners.1.text",
  },
  {
    image: "src/assets/earbuds.webp",
    background: "bg-banner-green",
    btnColor: "text-text-green",
    textKey: "banners.2.text",
  },
];

function Banners() {
  return (
    <div className="flex flex-col md:flex-row w-full xl:flex-col justify-center items-center gap-5">
      {banners.map((banner) => (
        <BannerBox banner={banner} />
      ))}
    </div>
  );
}

export default Banners;
