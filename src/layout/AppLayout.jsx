import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default AppLayout;
