import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

function MainLayout() {
  return (
    <div>
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
