import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import ScrollTop from "../../components/ScrollTop";

const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
    </>
  );
};

export default MainLayout;
