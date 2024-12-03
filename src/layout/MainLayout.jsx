import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";

function MainLayout() {
  return (
    <div className="md:w-[90%] mx-auto">
      <header>
        <Headers />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
