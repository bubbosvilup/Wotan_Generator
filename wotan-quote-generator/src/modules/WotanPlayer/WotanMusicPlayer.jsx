import React, { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import playlist from "./playlist";
import styles from "./WotanMusicPlayer.module.css";

function WotanMusicPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stopAttempts, setStopAttempts] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState("");
  const timeoutRef = useRef(null);
  // Aggiungi stato per il volume e l'animazione delle citazioni
  const [volume, setVolume] = useState(0.6);
  const [quoteChanged, setQuoteChanged] = useState(false);

  const currentTrack = playlist[trackIndex];
  const wotanQuotes = [
    "Questa musica viene dallo spirito della montagna. Credo. O da un tanuki arrabbiato.",
    "Ogni tamburo è un richiamo allo spirito del colpo. O del riso bollito.",
    "La melodia entra nel mio spirito... e poi esce dal ginocchio.",
    "Quando batte il tamburo, gli spiriti ballano. O scappano.",
    "Wotan ha meditato con questa musica. Ora ha mal di testa.",
    "Questa canzone parla di onore. Ma io ci sento solo urla e vento.",
    "Ho visto una volpe danzare a questo ritmo. Forse era ubriaca.",
    "Ogni nota è come una katana. Taglia, ma non so cosa.",
    "Quando parte il flauto, parte anche il mio bisogno di urlare.",
    "Il silenzio è lo spirito della sconfitta. E anche della noia.",
    "Questa musica è come il tè cerimoniale... ma con i tamburi e meno pazienza.",
    "Un tanuki mi ha insegnato questo ritmo. Poi mi ha rubato la zuppa.",
    "Lo shamisen canta. Io grugnisco. Insieme facciamo arte.",
    "Quando la musica finisce, Wotan lancia un sasso per continuare il ritmo.",
    "Ho chiesto al monaco se era musica sacra. Lui ha detto 'no' e ha pianto.",
    "Questa melodia mi guida. Dove? Boh. Ma ci vado comunque.",
    "Il vento tra i bambù ha questo ritmo... se lo picchi abbastanza.",
    "Un kami mi ha detto che ballare è preghiera. Wotan ha creduto. Poi ha ballato troppo forte.",
    "Il basso rimbomba nei templi. O forse era il drago dentro di me. O la fame.",
    "Wotan ha fatto un haiku una volta. Poi l’ha rotto con una testata.",
    "Wotan ha sentito lo shamisen e ha pensato fosse un gatto triste.",
    "Ogni flauto è un serpente in legno che sussurra vento. Oppure fa solo fischio.",
    "Mi hanno detto che era musica rituale. Io ho iniziato il combattimento.",
    "Questa canzone mi ha ricordato mia madre. Alta, forte e che mi picchia forte.",
    "Il tamburo parla. Ma Wotan non sa leggere tamburo.",
    "Nel silenzio ho sentito la verità. Era 'hai fame'.",
    "Lo spirito del suono vive nella mia pancia. Credo sia un kami della digestione.",
    "La danza dei tanuki è potente. Specialmente se sei ubriaco.",
    "Un monaco mi ha detto di ascoltare con il cuore. Io l'ho fatto, ora il cuore fa male.",
    "Quando ascolto, vedo colori. Ma non dovrei. Sono cieco da un orecchio.",
    "Se la canzone non ha un drago, non è degna.",
    "Wotan non teme gli Yokai. Ma teme le canzoni lente.",
    "La musica scaccia gli Yokai maligni. O li fa ballare. Poi è peggio.",
    "Questa melodia mi ha risvegliato l’antenato dentro di me. Ha detto 'smettila'.",
    "Il ritmo mi guida... poi si perde. Io lo seguo comunque.",
    "Nel vento c’è un flauto. Ma anche polvere. Tossisco e ballo insieme.",
    "Mi hanno detto di ascoltare con l’anima. Ma Wotan usa i gomiti.",
    "Quando parte il ritmo, parte anche il mal di schiena. È il segno.",
    "La musica mi purifica. Tranne quando urlo troppo. Poi serve il monaco.",
    "Ho ballato questa canzone sotto la pioggia. Ora ho un Kami nel ginocchio.",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  // Modifica la funzione per cambiare le citazioni con effetto
  useEffect(() => {
    let quoteTimer;

    if (isPlaying) {
      // Change quote every some seconds randomly
      const changeQuote = () => {
        const random = Math.floor(Math.random() * wotanQuotes.length);
        setQuoteIndex(random);
        // Attiva l'effetto di animazione
        setQuoteChanged(true);
        // Disattiva l'effetto dopo 1 secondo
        setTimeout(() => setQuoteChanged(false), 1000);

        // Set next change interval (random between some seconds)
        const nextInterval = 5000 + Math.floor(Math.random() * 4000);
        quoteTimer = setTimeout(changeQuote, nextInterval);
      };

      // Initial quote change after a random delay
      quoteTimer = setTimeout(
        changeQuote,
        8000 + Math.floor(Math.random() * 4000)
      );
    }

    return () => {
      if (quoteTimer) clearTimeout(quoteTimer);
    };
  }, [isPlaying, wotanQuotes.length]);

  // Aggiungi funzione per gestire il cambio di volume
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    // Aggiorna il volume del suono corrente se esiste
    if (sound) {
      sound.volume(newVolume);
    }
  };
  const [trackProgress, setTrackProgress] = useState(0);
  const progressIntervalRef = useRef(null);

  const startProgressBar = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }

    setTrackProgress(0);
    progressIntervalRef.current = setInterval(() => {
      setTrackProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 1000); // Update every second
  };

  const stopProgressBar = () => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    setTrackProgress(0);
  };

  // Add the missing stopSound function
  const stopSound = () => {
    if (stopAttempts === 0) {
      // First attempt
      setOverlayMessage("Non puoi fermare la Wotanness!");
      setShowOverlay(true);
      setStopAttempts(1);

      // Hide overlay after 3 seconds
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
    } else {
      // Second attempt
      setShowConfirmation(true);
    }
  };

  // Add the missing nextTrack function
  // Modifica nextTrack per usare il volume impostato
  const nextTrack = () => {
    // Stop current track first
    if (sound) {
      sound.stop();
      sound.unload();
      setSound(null); // Ensure sound is completely cleared
    }

    const next = (trackIndex + 1) % playlist.length;
    setTrackIndex(next);

    // Create and play the new sound directly instead of relying on useEffect
    const newSound = new Howl({
      src: [playlist[next].src],
      volume: volume,
      onend: () => {
        nextTrack();
      },
    });

    newSound.play();
    setSound(newSound);
    setIsPlaying(true);
    startProgressBar();
  };

  // Modifica playSound per usare il volume impostato
  const playSound = () => {
    // Stop any currently playing sound first to prevent overlapping
    if (sound) {
      sound.stop();
      sound.unload();
    }

    const newSound = new Howl({
      src: [currentTrack.src],
      volume: volume,
      onend: () => {
        // Auto-play next track when current one ends
        nextTrack();
      },
    });
    newSound.play();
    setSound(newSound);
    setIsPlaying(true);
    startProgressBar();
  };

  // Modify confirmStop to stop progress bar
  const confirmStop = (confirmed) => {
    setShowConfirmation(false);

    if (confirmed) {
      // Ensure we stop the sound immediately
      if (sound) {
        sound.stop();
        sound.unload();
        setSound(null);
      }
      setIsPlaying(false);
      setStopAttempts(2); // Ensure stop button remains disabled
      setOverlayMessage("Wotan è triste... 😢");
      stopProgressBar();
    } else {
      setOverlayMessage("Wotan è fiero di te! 🔥");
    }

    setShowOverlay(true);

    // Hide overlay after 3 seconds
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);

    // Reset stop attempts if user decides not to stop
    if (!confirmed) {
      setStopAttempts(0);
    }
  };

  // Remove or modify this useEffect as it's causing issues with track changes
  // We're now handling playback directly in nextTrack and playSound
  useEffect(() => {
    if (isPlaying && !sound) {
      playSound();
    }
  }, [isPlaying]);

  // Add this useEffect back for autoplay when component mounts
  useEffect(() => {
    // Start playing when component mounts
    const initialSound = new Howl({
      src: [currentTrack.src],
      volume: 0.8,
      onend: () => {
        // Auto-play next track when current one ends
        nextTrack();
      },
    });
    initialSound.play();
    setSound(initialSound);
    setIsPlaying(true);

    return () => {
      // Cleanup on unmount
      if (initialSound) {
        initialSound.stop();
        initialSound.unload();
      }
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={styles.playerContainer}>
      <div className={styles.player}>
        <h2>🎧 {currentTrack.name}</h2>

        {/* Add progress bar */}
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${trackProgress}%` }}
          ></div>
        </div>

        <div className={styles.controls}>
          <button onClick={playSound}>▶️ Play</button>
          <button
            onClick={stopSound}
            disabled={stopAttempts > 1}
            className={stopAttempts > 0 ? styles.warningButton : ""}
          >
            ⏹ Stop
          </button>
          <button onClick={nextTrack}>⏭ Next</button>
        </div>

        {/* Aggiungi controllo volume */}
        <div className={styles.volumeControl}>
          <span>🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className={styles.volumeSlider}
          />
          <span>🔊</span>
        </div>

        <div
          className={`${styles.wotanQuote} ${
            quoteChanged ? styles.quoteChanged : ""
          }`}
        >
          "{isPlaying ? wotanQuotes[quoteIndex] : "Premi Play, codardo!"}"
        </div>
        <div className={styles.signature}>–Wotan</div>
      </div>

      {showOverlay && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>{overlayMessage}</div>
        </div>
      )}

      {showConfirmation && (
        <div className={styles.overlay}>
          <div className={styles.confirmationBox}>
            <p>Sei sicuro di voler fermare la Wotanness?</p>
            <div className={styles.confirmButtons}>
              <button
                onClick={() => confirmStop(true)}
                className={styles.sadButton}
              >
                SI (Wotan triste)
              </button>
              <button
                onClick={() => confirmStop(false)}
                className={styles.proudButton}
              >
                NO (Wotan è fiero di te)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WotanMusicPlayer;
