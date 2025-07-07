import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Foooter/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="pt-35">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
