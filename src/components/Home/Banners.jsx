import BannerBox from "./BannerBox";

const banners = [
  {
    id: 0,
    image: "src/assets/cam.webp",
    background: "bg-banner-blue",
    dark: "dark:bg-banner-dark",
    btnColor: "text-text-blue",
    textKey: "banners.0.text",
  },
  {
    id: 1,
    image: "src/assets/smart.webp",
    background: "bg-banner-orange",
    dark: "dark:bg-banner-dark",
    btnColor: "text-text-orange",
    textKey: "banners.1.text",
  },
  {
    id: 2,
    image: "src/assets/earbuds.webp",
    background: "bg-banner-green",
    dark: "dark:bg-banner-dark",
    btnColor: "text-text-green",
    textKey: "banners.2.text",
  },
];

function Banners() {
  return (
    <div className="flex flex-col md:flex-row w-full xl:flex-col justify-center items-center gap-5 xl:h-[500px]">
      {banners.map((banner) => (
        <BannerBox key={banner.id} banner={banner} />
      ))}
    </div>
  );
}

export default Banners;
