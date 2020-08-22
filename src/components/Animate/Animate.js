import React, { useEffect, useRef } from "react";
import styles from "./Animate.module.scss";
import gsap from "gsap";

const Animate = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(boxRef.current, 1, { x: "100%", opacity: 0, scale: 2 });
  }, []);

  return (
    <div>
      <div ref={boxRef} className={styles.box} />
    </div>
  );
};

export default Animate;
