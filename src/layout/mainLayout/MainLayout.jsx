import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import ScrollTop from "../../components/ScrollTop";
import Footer from "../footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
