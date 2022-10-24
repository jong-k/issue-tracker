import React, { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return [width, height];
};

const App = () => {
  const [w, h] = useWindowSize();
  return (
    <div>
      {w} {h}
    </div>
  );
};

export default App;
