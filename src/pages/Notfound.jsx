import IpadBannar from "../components/NotFound/IpadBannar";
import IphonBannar from "../components/NotFound/IphonBannar";
import NotFoundMessage from "../components/NotFound/NotFoundMessage";

function Notfound() {
  return (
    <>
      <NotFoundMessage />
      <div className="container grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-5">
        <IphonBannar />
        <IpadBannar />
      </div>
    </>
  );
}

export default Notfound;
