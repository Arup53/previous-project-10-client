import { Outlet, useLocation } from "react-router-dom";
import Headers from "../components/Headers";
import { useAuthContext } from "../context/AuthProvider";
import Footer from "../components/Footer";

function MainLayout() {
  const { pathname } = useLocation();
  const { theme } = useAuthContext();

  return (
    <div data-theme={`${pathname === "/" && theme}`}>
      <header className="w-[80%] md:w-[90%] mx-auto">
        <Headers />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
