import React, { useEffect, useState } from "react";

const Cleanup = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("Mouse event invoked");
    setCurrentNum((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("useEffect in Cleanup invoked !");
    window.addEventListener("mousedown", incrementNum);
    return () => {
      console.log("unmount!");
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};

export default Cleanup;
