import React, { useEffect } from "react";
import MainRouters from "./pages";
import NetworkStatus from "./components/network-status/NetworkStatus";
import "aos/dist/aos.css";
import AOS from "aos";
import { Toaster } from "react-hot-toast";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div>
      <NetworkStatus />
      <MainRouters />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default React.memo(App);
