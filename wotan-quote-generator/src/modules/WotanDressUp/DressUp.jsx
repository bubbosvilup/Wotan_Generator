import styles from "./DressUp.module.css";
import wotanBase from "./assets/wotan.png";
import React from "react";
import hair1 from "./assets/Wotan_Hair_1.png";
import hair2 from "./assets/Wotan_Hair_2.png";
import hair3 from "./assets/Wotan_Hair_3.png";
import backBAxe from "./assets/BackAttach_BAxe.png";
import backDAxe from "./assets/BackAttach_DAxe.png";
import backPaddle from "./assets/BackAttach_Paddle.png";
import backShield from "./assets/BackAttachShield.png";
import bootsCowboy from "./assets/Boots_Cowboy.png";
import bootsPlate from "./assets/Boots_Plate.png";
import chestKimono from "./assets/Chest_Kimono.png";
import chestLeather1 from "./assets/Chest_Leather1.png";
import chestPlate from "./assets/Chest_Plate_.png";
import chestPurple from "./assets/Chest_Purple.png";
import chestShirtBDSM from "./assets/Chest_ShirtBDSM.png";
import chestTShirt from "./assets/Chest_tShirt.png";
import gagBall from "./assets/FaceAcc_Gag_ball.png";
import ninjaBand from "./assets/FaceAcc_NinjaBand.png";
import gauntletDarkIron from "./assets/Gauntlet_DarkIron.png";
import gauntletIron from "./assets/Gauntlet_Iron.png";
import hair5 from "./assets/Hair_5.png";
import pantsLeatherKilt from "./assets/Pants_Leather_Kilt.png";
import pantsLeatherTrousers from "./assets/Pants_Leather_Trousers.png";

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
  {
    name: "Verde Acquatico",
    img: hair5,
    className: styles.hair5,
  },
];

const pants = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "Leather Trousers",
    img: pantsLeatherTrousers,
    className: styles.pants1,
  },
  {
    name: "Leather Kilt",
    img: pantsLeatherKilt,
    className: styles.pants2,
  },
];

const chest = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "T-Shirt",
    img: chestTShirt,
    className: styles.chest1,
  },
  {
    name: "BDSM Shirt",
    img: chestShirtBDSM,
    className: styles.chest2,
  },
  {
    name: "Purple Robe",
    img: chestPurple,
    className: styles.chest3,
  },
  {
    name: "Plate Armor",
    img: chestPlate,
    className: styles.chest4,
  },
  {
    name: "Leather Armor",
    img: chestLeather1,
    className: styles.chest5,
  },
  {
    name: "Kimono",
    img: chestKimono,
    className: styles.chest6,
  },
];

const boots = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "Cowboy Boots",
    img: bootsCowboy,
    className: styles.boots1,
  },
  {
    name: "Plate Boots",
    img: bootsPlate,
    className: styles.boots2,
  },
];

const faceAccessories = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "Ball Gag",
    img: gagBall,
    className: styles.face1,
  },
  {
    name: "Ninja Band",
    img: ninjaBand,
    className: styles.face2,
  },
];

const backAttachments = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "Battle Axe",
    img: backBAxe,
    className: styles.back1,
  },
  {
    name: "Double Axe",
    img: backDAxe,
    className: styles.back2,
  },
  {
    name: "Paddle",
    img: backPaddle,
    className: styles.back3,
  },
  {
    name: "Shield",
    img: backShield,
    className: styles.back4,
  },
];

const gauntlets = [
  {
    name: "🎱",
    img: null,
    className: "",
  },
  {
    name: "Dark Iron",
    img: gauntletDarkIron,
    className: styles.gauntlet1,
  },
  {
    name: "Iron",
    img: gauntletIron,
    className: styles.gauntlet2,
  },
];

function DressUp() {
  const [selectedHair, setSelectedHair] = React.useState(hairstyles[0]);
  const [selectedChest, setSelectedChest] = React.useState(chest[0]);
  const [selectedPants, setSelectedPants] = React.useState(pants[0]);
  const [selectedBoots, setSelectedBoots] = React.useState(boots[0]);
  const [selectedFace, setSelectedFace] = React.useState(faceAccessories[0]);
  const [selectedBack, setSelectedBack] = React.useState(backAttachments[0]);
  const [selectedGauntlets, setSelectedGauntlets] = React.useState(
    gauntlets[0]
  );
  return (
    <>
      <h1 className={styles.title}>Dress my Wotan</h1>
      <div className={styles.wrapper}>
        {selectedHair?.img && (
          <img
            src={selectedHair.img}
            alt={selectedHair.name}
            className={selectedHair.className}
          />
        )}
        {selectedChest?.img && (
          <img
            src={selectedChest.img}
            alt={selectedChest.name}
            className={selectedChest.className}
          />
        )}
        {selectedPants?.img && (
          <img
            src={selectedPants.img}
            alt={selectedPants.name}
            className={selectedPants.className}
          />
        )}
        {selectedBoots?.img && (
          <img
            src={selectedBoots.img}
            alt={selectedBoots.name}
            className={selectedBoots.className}
          />
        )}
        {selectedFace?.img && (
          <img
            src={selectedFace.img}
            alt={selectedFace.name}
            className={selectedFace.className}
          />
        )}
        {selectedBack?.img && (
          <img
            src={selectedBack.img}
            alt={selectedBack.name}
            className={selectedBack.className}
          />
        )}
        {selectedGauntlets?.img && (
          <img
            src={selectedGauntlets.img}
            alt={selectedGauntlets.name}
            className={selectedGauntlets.className}
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
      <div className={styles.buttonBar}>
        {chest.map((style, index) => (
          <button key={index} onClick={() => setSelectedChest(style)}>
            {style.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default DressUp;
