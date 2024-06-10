import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="container m-auto px-6 lg:px-28">
      <Outlet />
    </div>
  );
}

export default MainLayout;
