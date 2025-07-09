import BannerBox from "./BannerBox";

const banners = [
  {
    image: "src/assets/cam.webp",
    text: "Next Gen <b>Video</b> with <b>700 Cam</b>",
    background: "bg-banner-blue",
    btnColor: "text-text-blue",
  },
  {
    image: "src/assets/smart.webp",
    text: "Top Rated <b>Smart watches</b> are on <b>Sale</b>",
    background: "bg-banner-orange",
    btnColor: "text-text-orange",
  },
  {
    image: "src/assets/earbuds.webp",
    text: "Catch big <b>Deals</b> on <b>Earbuds</b>",
    background: "bg-banner-green",
    btnColor: "text-text-green",
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
