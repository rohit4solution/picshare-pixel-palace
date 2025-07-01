
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
