import styles from "./DressUp.module.css";
import wotanBase from "./assets/wotan.png";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
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
    name: "Bald",
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
    name: "No Pants",
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
    name: "No chest",
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
    name: "No boots",
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
    name: "Empty",
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
    name: "Empty",
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
    name: "No Bracers",
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
  // Existing state variables
  const [hairIndex, setHairIndex] = React.useState(0);
  const selectedHair = hairstyles[hairIndex];

  // Add index-based state for all other categories
  const [chestIndex, setChestIndex] = React.useState(0);
  const selectedChest = chest[chestIndex];

  const [pantsIndex, setPantsIndex] = React.useState(0);
  const selectedPants = pants[pantsIndex];

  const [bootsIndex, setBootsIndex] = React.useState(0);
  const selectedBoots = boots[bootsIndex];

  const [faceIndex, setFaceIndex] = React.useState(0);
  const selectedFace = faceAccessories[faceIndex];

  const [backIndex, setBackIndex] = React.useState(0);
  const selectedBack = backAttachments[backIndex];

  const [gauntletsIndex, setGauntletsIndex] = React.useState(0);
  const selectedGauntlets = gauntlets[gauntletsIndex];

  // Generic handler for all categories
  const handleItemChange = (direction, index, setIndex, itemsArray) => {
    setIndex((prev) => {
      if (direction === "prev" && prev > 0) return prev - 1;
      if (direction === "next" && prev < itemsArray.length - 1) return prev + 1;
      return prev;
    });
  };

  const wotanRef = useRef(null);
  
  // Function to save the current Wotan configuration as an image
  const saveWotanImage = () => {
    if (wotanRef.current) {
      html2canvas(wotanRef.current).then(canvas => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = "my-wotan.png";
        link.click();
      });
    }
  };
  
  // Function to share the current Wotan configuration
  const shareWotan = async () => {
    if (wotanRef.current && navigator.share) {
      try {
        const canvas = await html2canvas(wotanRef.current);
        canvas.toBlob(async (blob) => {
          const file = new File([blob], "my-wotan.png", { type: "image/png" });
          await navigator.share({
            title: "My Wotan Character",
            text: "Check out my Wotan character!",
            files: [file]
          });
        });
      } catch (error) {
        console.error("Error sharing:", error);
        alert("Couldn't share the image. Try saving it instead.");
      }
    } else {
      alert("Sharing is not supported on this browser. Try saving the image instead.");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Dress my Wotan</h1>
      <div className={styles.gameContainer}>
        <div className={styles.wotanContainer}>
          <div className={styles.wrapper} ref={wotanRef}>
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
          
          <div className={styles.actionButtons}>
            <button 
              className={styles.saveButton} 
              onClick={saveWotanImage}
              title="Save as image"
            >
              💾 Save
            </button>
            <button 
              className={styles.shareButton} 
              onClick={shareWotan}
              title="Share your Wotan"
            >
              📤 Share
            </button>
          </div>
        </div>
        
        <div className={styles.gameMenu}>
          <h2 className={styles.menuTitle}>Equipment</h2>

          <div className={styles.menuCategory}>
            <h3>Hair</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange("prev", hairIndex, setHairIndex, hairstyles)
                }
                disabled={hairIndex === 0}
              >
                ←
              </button>
              <span>{selectedHair.name}</span>
              <button
                onClick={() =>
                  handleItemChange("next", hairIndex, setHairIndex, hairstyles)
                }
                disabled={hairIndex === hairstyles.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.menuCategory}>
            <h3>Chest</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange("prev", chestIndex, setChestIndex, chest)
                }
                disabled={chestIndex === 0}
              >
                ←
              </button>
              <span>{selectedChest.name}</span>
              <button
                onClick={() =>
                  handleItemChange("next", chestIndex, setChestIndex, chest)
                }
                disabled={chestIndex === chest.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.menuCategory}>
            <h3>Pants</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange("prev", pantsIndex, setPantsIndex, pants)
                }
                disabled={pantsIndex === 0}
              >
                ←
              </button>
              <span>{selectedPants.name}</span>
              <button
                onClick={() =>
                  handleItemChange("next", pantsIndex, setPantsIndex, pants)
                }
                disabled={pantsIndex === pants.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.menuCategory}>
            <h3>Boots</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange("prev", bootsIndex, setBootsIndex, boots)
                }
                disabled={bootsIndex === 0}
              >
                ←
              </button>
              <span>{selectedBoots.name}</span>
              <button
                onClick={() =>
                  handleItemChange("next", bootsIndex, setBootsIndex, boots)
                }
                disabled={bootsIndex === boots.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.menuCategory}>
            <h3>Face</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange(
                    "prev",
                    faceIndex,
                    setFaceIndex,
                    faceAccessories
                  )
                }
                disabled={faceIndex === 0}
              >
                ←
              </button>
              <span>{selectedFace.name}</span>
              <button
                onClick={() =>
                  handleItemChange(
                    "next",
                    faceIndex,
                    setFaceIndex,
                    faceAccessories
                  )
                }
                disabled={faceIndex === faceAccessories.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.menuCategory}>
            <h3>Back</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange(
                    "prev",
                    backIndex,
                    setBackIndex,
                    backAttachments
                  )
                }
                disabled={backIndex === 0}
              >
                ←
              </button>
              <span>{selectedBack.name}</span>
              <button
                onClick={() =>
                  handleItemChange(
                    "next",
                    backIndex,
                    setBackIndex,
                    backAttachments
                  )
                }
                disabled={backIndex === backAttachments.length - 1}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.menuCategory}>
            <h3>Gauntlets</h3>
            <div className={styles.menuItem}>
              <button
                onClick={() =>
                  handleItemChange(
                    "prev",
                    gauntletsIndex,
                    setGauntletsIndex,
                    gauntlets
                  )
                }
                disabled={gauntletsIndex === 0}
              >
                ←
              </button>
              <span>{selectedGauntlets.name}</span>
              <button
                onClick={() =>
                  handleItemChange(
                    "next",
                    gauntletsIndex,
                    setGauntletsIndex,
                    gauntlets
                  )
                }
                disabled={gauntletsIndex === gauntlets.length - 1}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DressUp;
