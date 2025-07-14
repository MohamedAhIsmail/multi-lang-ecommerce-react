import banner from "../../assets/background.jpg";
import laptop from "../../assets/laptop.png";

function CommingSoon() {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img src={banner} alt="Comming soon" />
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 w-full flex flex-col items-center">
        <img
          src={laptop}
          alt="Laptop"
          className="transition-all duration-300"
        />
        <div className="flex flex-col items-center gap-3 text-white">
          <h3 className="text-5xl xl:text-6xl font-semibold">MacBook</h3>
          <p>Be Pro Anywhere</p>
          
        </div>
      </div>
    </div>
  );
}

export default CommingSoon;
