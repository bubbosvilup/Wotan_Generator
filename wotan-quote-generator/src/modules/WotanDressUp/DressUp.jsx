import styles from "./DressUp.module.css";
import wotanBase from "./assets/wotan.png";
import React from "react";
import hair1 from "./assets/Wotan_Hair_1.png";
import hair2 from "./assets/Wotan_Hair_2.png";
import hair3 from "./assets/Wotan_Hair_3.png";

const hairstyles = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "Base lunga",
    img: hair1,
    className: styles.hair1,
  },
  {
    name: "Todorochi",
    img: hair2,
    className: styles.hair2,
  },
  {
    name: "Moe",
    img: hair3,
    className: styles.hair3,
  },
];

function DressUp() {
  const [selectedHair, setSelectedHair] = React.useState(hairstyles[0]);
  return (
    <>
      <h1 className={styles.title}>Dress my Wotan</h1>
      <div className={styles.wrapper}>
        {selectedHair.img && (
          <img
            src={selectedHair.img}
            alt={selectedHair.name}
            className={selectedHair.className}
          />
        )}
        <img src={wotanBase} alt="Wotan base" className={styles.base} />
      </div>
      <div className={styles.buttonBar}>
        {hairstyles.map((style, index) => (
          <button key={index} onClick={() => setSelectedHair(style)}>
            {style.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default DressUp;
