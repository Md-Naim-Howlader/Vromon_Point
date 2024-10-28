import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainLayout from "./layout/mainLayout/MainLayout";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <MainLayout />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
