import React, { useEffect } from "react";
import MainRouters from "./pages";
import NetworkStatus from "./components/network-status/NetworkStatus";
import "aos/dist/aos.css";
import AOS from "aos";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <NetworkStatus />
      <MainRouters />
    </div>
  );
};

export default React.memo(App);
