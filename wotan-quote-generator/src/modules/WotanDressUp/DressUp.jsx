import styles from "./DressUp.module.css";
import wotanBase from "./assets/wotan.png";
import React from "react";
import hair1 from "./assets/Wotan_Hair_1.png";

function DressUp() {
  return (
    <div className={styles.wrapper}>
      <img src={hair1} alt="Hair style 1" className={styles.hair} />
      <img src={wotanBase} alt="Wotan base" className={styles.base} />
    </div>
  );
}

export default DressUp;
