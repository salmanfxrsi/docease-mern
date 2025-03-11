import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <nav>
        <Navbar />
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer></footer>
    </>
  );
};

export default MainLayout;
