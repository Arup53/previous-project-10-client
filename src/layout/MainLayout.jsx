import { Outlet, useLocation } from "react-router-dom";
import Headers from "../components/Headers";
import { useAuthContext } from "../context/AuthProvider";

function MainLayout() {
  const { pathname } = useLocation();
  const { theme } = useAuthContext();

  console.log(pathname);

  return (
    <div data-theme={`${pathname === "/" && theme}`}>
      <header className="md:w-[90%] mx-auto">
        <Headers />
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="">This is footer</footer>
    </div>
  );
}

export default MainLayout;
