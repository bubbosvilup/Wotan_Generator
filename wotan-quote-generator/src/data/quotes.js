const quotes = [
  {
    id: 1,
    stat: "INT",
    category: "Arcana",
    check: "Passed",
    parts: {
      before: "Questo simbolo... uhm... mi ricorda cosa strana.",
      smart:
        "Ma se osservi l'intreccio delle linee, capisci che evoca una manipolazione del flusso eterico nel ciclo arcano del...",
      after: "GUARDA VEDI SBRILLUCCA",
    },
  },
  {
    id: 2,
    stat: "INT",
    category: "Arcana",
    check: "Passed",
    parts: {
      before: "Io vedere rune. Io capire rune. Rune sono...",
      smart:
        "tracce mnemoniche di una mente superiore che ha inciso la volontà del cosmo sulla ma—",
      after: "È TIPO GIOCO DELL'OCA CHE TE PRENDI PEZZO E MUOVI!",
    },
  },
  {
    id: 3,
    stat: "INT",
    category: "Arcana",
    check: "Failed",
    parts: {
      before: "Magia è roba da maghi",
      smart:
        "Però questa... questa emana un’aura che vibra in sintonia con le forze del—",
      after: "DEL COSO - IL MAGICO AFFARE DEL COSO",
    },
  },
  {
    id: 4,
    stat: "INT",
    category: "Natura",
    check: "Passed",
    parts: {
      before: "Questa cosa puzza, però...",
      smart:
        "Sono tossine che agiscono sui nervi come una metafora dell’aggressività latente del—",
      after: "BRUCIA SE MANGI SU LINGUA!",
    },
  },
  {
    id: 5,
    stat: "INT",
    category: "Natura",
    check: "Failed",
    parts: {
      before: "ANIMALE BRUTTO E GAROSO,",
      smart:
        " Ma l'animale non attacca per rabbia. Attacca per... una frattura tra l’istinto e la convivenza forzata col territorio antropizzato dalla—",
      after: "QUESTO COMUNQUE HA DENTI",
    },
  },
  {
    id: 6,
    stat: "INT",
    category: "Storia",
    check: "Failed",
    parts: {
      before: "Ah si io conosce, guarda qua graffi",
      smart:
        "Ma questi segni sul muro corrispondono riportano chiaramente ad un tempo passato ed i segni evidenti ..—",
      after: "AH NO ASPETTA ERA SOLO MACCHIA!",
    },
  },
  {
    id: 7,
    stat: "INT",
    category: "Storia",
    check: "Failed",
    parts: {
      before: "C'era un re, o forse era sasso.",
      smart:
        "Ma pensando alle ragioni esterne e la storia che questo posto trasuda offrendoci uno scorcio sull..",
      after: "WOTAN NON RICORDA, WOTAN DORMITO LEZIONE QUEL GIORNO",
    },
  },
  {
    id: 8,
    stat: "INT",
    category: "Indagare",
    check: "Failed",
    parts: {
      before: "Wotan sente puzza di mistero misterioso",
      smart:
        "Ma la disposizione degli oggetti indica una fuga precipitosa, probabilmente dovuta a una scoperta compromettente legata alla—",
      after: "AH NO NO, PUZZA ERA SOLO ASCELLA DI WOTAN",
    },
  },
  {
    id: 9,
    stat: "INT",
    category: "Indagare",
    check: "Passed",
    parts: {
      before: "Ci sono strani segni ingiro",
      smart:
        "Ma se collego tutti questi elementi categorizzandoli e poi riassegnandoli alla loro vera posizione posso dedurre che",
      after: "SI, E' QUELLO!",
    },
  },
  {
    id: 10,
    stat: "INT",
    category: "Religione",
    check: "Passed",
    parts: {
      before: "Si ricordo questo io.",
      smart:
        "Ricordo distintamente di aver letto di avvenimenti simili in gioventù, quando sommerso dai libri io sovente scorrev..",
      after: "Visto, Wotan sà tutto",
    },
  },
  {
    id: 11,
    stat: "INT",
    category: "Religione",
    check: "Failed",
    parts: {
      before: "Si religione è forte di Wotan",
      smart:
        "Le pergamene della mia tribù narravano questo e fungevano da fulgido monito spingendoci ad esperire tali...",
      after: "MA WOTAN FORTE PIU' QUANDO PICCHIA",
    },
  },
  {
    id: 12,
    stat: "INT",
    category: "Matematica",
    check: "Passed",
    parts: {
      before: "Due più due fa... ASPETTA.",
      smart:
        "Se applichiamo la logica degli insiemi disgiunti nel contesto di una geometria non euclidea con asimmetria iper—",
      after: "TRE! SICURO CEH FA ALMENO TRE!",
    },
  },
  {
    id: 13,
    stat: "INT",
    category: "Matematica",
    check: "Failed",
    parts: {
      before: "Numeri strani. Tipo... tipo serpenti.",
      smart:
        "Ma se li ordino in base alla progressione di Fibonacci e li sovrappongo alla mappa della zona posso ottenere—",
      after: "UN FORMAGGIO MAGICO ED IL NUMERO 8.",
    },
  },
  {
    id: 14,
    stat: "INT",
    category: "Filosofia",
    check: "Passed",
    parts: {
      before: "Io picchio. Ma perché io picchio?",
      smart:
        "Forse la violenza è l'esternazione dell'inadeguatezza interiore riflessa sulla fragile struttura della coscienza sociale frammenta—",
      after: "IO PICCHIO PERCHÉ BELLO!",
    },
  },
  {
    id: 15,
    stat: "INT",
    category: "Filosofia",
    check: "Failed",
    parts: {
      before: "Se sasso pensa, io penso?",
      smart:
        "Cogito ergo sasso, Allora forse esistere è solo un effetto collaterale della memoria collettiva scolpita nella—",
      after: "NO MOMENTO, MOMENTO, MOMENTO... QUANDO MANGIATO IO ULTIMA VOLTA?",
    },
  },
  {
    id: 16,
    stat: "INT",
    category: "Tecnologia",
    check: "Failed",
    parts: {
      before: "Questo coso fa luci strane.",
      smart:
        "Probabilmente è un meccanismo di origine non definita che sfrutta l'energia residua di un nucleo di mana condensato attraverso—",
      after: "AH NO NO SCUSA E' SOLO MIO DITO",
    },
  },
  {
    id: 17,
    stat: "INT",
    category: "Tecnologia",
    check: "Passed",
    parts: {
      before: "Questo coso è strano.",
      smart:
        "Ma la sua funzione primaria è logicamente legata alla intera struttura che per questo motivo può benissimo..",
      after: "WOTAN MEGA INTELLIGENTE",
    },
  },
];

export default quotes;
