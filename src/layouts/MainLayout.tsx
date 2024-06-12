import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import NavigationBar from "../components/common/NavigationBar";

function MainLayout() {
  return (
    <div className="px-6 lg:px-28">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
