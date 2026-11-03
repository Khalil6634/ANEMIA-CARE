import { Outlet } from "react-router";

const NoAuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NoAuthLayout;
