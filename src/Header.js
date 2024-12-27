import { useState, useEffect } from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";

const Header = ({ title }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="Header">
      <h1>{title}</h1>
      {windowSize.width < 768 ? (
        <FaMobileAlt />
      ) : windowSize.width < 992 ? (
        <FaTabletAlt />
      ) : (
        <FaLaptop />
      )}
    </header>
  );
};

export default Header;
