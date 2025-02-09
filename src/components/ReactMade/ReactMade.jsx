import React, { useEffect, useState } from "react";
import "./ReactMade.scss";
import classNames from "classnames";

const ReactMade = () => {
  const [showPopup, setShowPopup] = useState(false);

  const reactMadeClass = classNames("reactMadeImage", {
    "reactMadeImage--show": showPopup,
  });

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
  }, []);

  return (
    <img
      src="assets/images/ReactMade.png"
      alt="Made with React"
      className={reactMadeClass}
      title="Click to close"
      onClick={handleClose}
    />
  );
};

export default ReactMade;
