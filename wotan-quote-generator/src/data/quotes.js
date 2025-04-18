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
      after: "TRE! SICURO CHE FA ALMENO TRE!",
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
  {
    id: 18,
    stat: "SAG",
    category: "Percezione",
    check: "Passed",
    parts: {
      before: "C’è qualcosa che non torna… l’aria è diversa.",
      smart:
        "Le vibrazioni nell’ambiente indicano un cambiamento sottile, impercettibile per occhi comuni ma non per la mia consapevolezza istintiva.",
      after: "Wotan ha annusato verità.",
    },
  },
  {
    id: 19,
    stat: "SAG",
    category: "Percezione",
    check: "Passed",
    parts: {
      before: "Shhh. Silenzio.",
      smart:
        "C’è un suono che si nasconde nel silenzio, una presenza che respira piano oltre la soglia del nostro udito.",
      after: "Wotan sente anche quello che non c’è.",
    },
  },
  {
    id: 20,
    stat: "SAG",
    category: "Percezione",
    check: "Failed",
    parts: {
      before: "Aspetta! Ho visto qualcosa muoversi!",
      smart:
        "La posizione dell’ombra era troppo allineata rispetto al vento, quindi deve essere senza dubbio un segno chiaro che—",
      after: "AH NO SOLO SCOIATTOLO",
    },
  },
  {
    id: 21,
    stat: "SAG",
    category: "Percezione",
    check: "Failed",
    parts: {
      before: "WOTAN ha Occhio di falco, naso di cane, orecchio di… qualcosa.",
      smart:
        "Collegando le sensazioni posso affermare che ciò che si cela è molto più vicino di quanto sembri perché—",
      after: "GUARDA QUEL SASSO HA FORMA DI PATATA",
    },
  },
  {
    id: 22,
    stat: "SAG",
    category: "Sopravvivenza",
    check: "Passed",
    parts: {
      before: "Traccia è fresca. Non tanto vecchia.",
      smart:
        "L’impronta è ancora calda e il modo in cui spezza l’erba indica passaggio recente, forse guidato da fretta o paura.",
      after: "Bestia andata di là. Sicuro.",
    },
  },
  {
    id: 23,
    stat: "SAG",
    category: "Sopravvivenza",
    check: "Passed",
    parts: {
      before: "Vento cambia, odore cambia.",
      smart:
        "Le correnti portano al mio naso l'odore da seguire, la strada da seguire è in quella direzione.",
      after: "Venite amici. seguite Wotan.",
    },
  },
  {
    id: 24,
    stat: "SAG",
    category: "Sopravvivenza",
    check: "Failed",
    parts: {
      before: "Traccia dice molto. Io traduco.",
      smart:
        "Vedi, se guardi bene la forma... questo è chiaramente zampa di cervo, o forse una scarpa, o forse—",
      after: "NO ASPETTA È STAMPA DI MIA FACCIA!",
    },
  },
  {
    id: 25,
    stat: "SAG",
    category: "Sopravvivenza",
    check: "Failed",
    parts: {
      before: "Moscerini in aria. Vuol dire qualcosa.",
      smart:
        "Gli insetti seguono i campi magnetici del corpo e si radunano sopra chi ha segreti nella mente e fame nei pensieri.",
      after: "QUINDI MOSCERINI È COME SASSO!",
    },
  },
  {
    id: 26,
    stat: "SAG",
    category: "Intuizione",
    check: "Passed",
    parts: {
      before: "Occhi suoi mentono, ma cuore no.",
      smart:
        "Il modo in cui non ti guarda, ma aspetta la tua reazione, mostra chiaramente che mente... forse anche a sé stesso.",
      after: "Io fiuto bugia meglio di cane vecchio.",
    },
  },
  {
    id: 27,
    stat: "SAG",
    category: "Intuizione",
    check: "Passed",
    parts: {
      before: "Lo sguardo è troppo fermo.",
      smart:
        "Quando qualcuno fissa così, vuol dire che dentro succede tempesta. E se c’è tempesta, c’è colpa.",
      after: "Io visto cose. Io capito tutto.",
    },
  },
  {
    id: 28,
    stat: "SAG",
    category: "Intuizione",
    check: "Failed",
    parts: {
      before: "Lui parlato strano. Molto strano.",
      smart:
        "Tono di voce era troppo... dritto. O troppo rotondo. Quindi sicuramente—",
      after: "LUI È ALBERO TRASFORMATO!",
    },
  },
  {
    id: 29,
    stat: "SAG",
    category: "Intuizione",
    check: "Failed",
    parts: {
      before: "Ho guardato nei suoi occhi.",
      smart:
        "E ho visto un segreto nascosto, un dolore antico, una bugia lunga come—",
      after: "ASPETTA ERA SPECCHIO!",
    },
  },
  {
    id: 30,
    stat: "SAG",
    category: "Medicina",
    check: "Passed",
    parts: {
      before: "Ferita è brutta ma non mortale.",
      smart:
        "Colore del sangue e ritmo del respiro dicono che organi interni sono ancora vivi... per poco.",
      after: "Stringi denti. Wotan sistema.",
    },
  },
  {
    id: 31,
    stat: "SAG",
    category: "Medicina",
    check: "Passed",
    parts: {
      before: "Ho visto questa roba prima.",
      smart:
        "Pelle così gonfia vuol dire veleno lento. Serve solo tempo, calore, e forse preghiera.",
      after: "O almeno bendaggio forte.",
    },
  },
  {
    id: 32,
    stat: "SAG",
    category: "Medicina",
    check: "Failed",
    parts: {
      before: "Ferita piccola. Io guarisco!",
      smart:
        "Serve solo morderla un po’ e poi coprirla con corteccia viva infusa di respiro caldo di Wotan per—",
      after: "ORA È PIÙ GRANDE MA HA ODORO DI BENE!",
    },
  },
  {
    id: 33,
    stat: "SAG",
    category: "Medicina",
    check: "Failed",
    parts: {
      before: "Io so come si cura.",
      smart:
        "Basta premere forte e gridare dentro la ferita così da scacciare il male con paura.",
      after: "NON FUNZIONA MA ORA NON C'E' PIU' IL MALE!",
    },
  },
  {
    id: 34,
    stat: "SAG",
    category: "Addestrare Animali",
    check: "Passed",
    parts: {
      before: "Animale è confuso. Come me.",
      smart:
        "Ma se parli piano e guardi basso, ti accetta. Non serve forza, serve pancia quieta.",
      after: "Ora è mio amico. Lo chiamo Peluscio.",
    },
  },
  {
    id: 35,
    stat: "SAG",
    category: "Addestrare Animali",
    check: "Passed",
    parts: {
      before: "Bestia ti guarda strano? Guarda strano anche te.",
      smart:
        "Riflettere comportamento è chiave. Mostri di essere simile, allora diventi famiglia.",
      after: "Io e lui ora andiamo a pisciare insieme.",
    },
  },
  {
    id: 36,
    stat: "SAG",
    category: "Addestrare Animali",
    check: "Failed",
    parts: {
      before: "Io domo animale col grido!",
      smart:
        "Animali rispondono alla vibrazione della voce potente, e capiscono chi è capobranco se—",
      after: "ORA MI INSEGUE CON DENTI IN FUORI!",
    },
  },
  {
    id: 37,
    stat: "SAG",
    category: "Addestrare Animali",
    check: "Failed",
    parts: {
      before: "Gli ho dato cibo e carezza.",
      smart:
        "Ma forse carezza era su coda sbagliata, o forse quello non era animale, o forse—",
      after: "ORA GRUGNISCE E MI HA CIUCCIATO MANO.",
    },
  },
  {
    id: 38,
    stat: "CAR",
    category: "Persuasione",
    check: "Passed",
    parts: {
      before: "Lascia che io ti spieghi cosa penso.",
      smart:
        "Se ci rifletti davvero, capisci che le nostre strade possono intrecciarsi in un modo che porta beneficio a entrambi.",
      after: "Dai, ora dai a Wotan quello che vuole.",
    },
  },
  {
    id: 39,
    stat: "CAR",
    category: "Persuasione",
    check: "Passed",
    parts: {
      before: "Io parlare bene, ascolta.",
      smart:
        "Le parole, quando usate con onore e un pizzico di miele, possono spezzare muri più duri delle spade.",
      after: "Ora tu convinto. Anche io convinto.",
    },
  },
  {
    id: 40,
    stat: "CAR",
    category: "Persuasione",
    check: "Failed",
    parts: {
      before: "Se tu fai cosa io dico, io do regalo.",
      smart:
        "Tipo… un sasso. Ma non un sasso qualsiasi. Uno che forse... parla? O canta?",
      after: "NO ASPETTA, PARLA SOLO A ME.",
    },
  },
  {
    id: 41,
    stat: "CAR",
    category: "Persuasione",
    check: "Failed",
    parts: {
      before: "Lascia che io convinca te con parole forti.",
      smart: "Perché chi non ascolta Wotan... poi ha orecchie che—",
      after: "CHE CRESCONO! O COSÌ HA DETTO SIGNOR SASSO!",
    },
  },
  {
    id: 42,
    stat: "CAR",
    category: "Intimidazione",
    check: "Passed",
    parts: {
      before: "Guarda bene questi muscoli. Tutti naturali.",
      smart:
        "La paura non nasce da urlo, ma dal silenzio prima del colpo. E io sono molto, molto silenzioso.",
      after: "Adesso parli, o parlo io con pugno.",
    },
  },
  {
    id: 43,
    stat: "CAR",
    category: "Intimidazione",
    check: "Passed",
    parts: {
      before: "Wotan guarda dentro anima.",
      smart:
        "E quando vedi riflesso tuo nei miei occhi... capisci che oggi è brutto giorno per sfidare me.",
      after: "Trema pure. Fa bene alla circolazione.",
    },
  },
  {
    id: 44,
    stat: "CAR",
    category: "Intimidazione",
    check: "Failed",
    parts: {
      before: "GRRRAAAAH! Questo era avvertimento.",
      smart:
        "Wotan non urla senza motivo. Urla perché dentro ha... un drago? O un cane gigante? O...",
      after: "NO, FORSE ERA ARIA NELLO STOMACO.",
    },
  },
  {
    id: 45,
    stat: "CAR",
    category: "Intimidazione",
    check: "Failed",
    parts: {
      before: "Io minacciare bene, guarda!",
      smart:
        "Chi non obbedisce avrà... le ginocchia confuse e le sopracciglia mangiate dai... serpenti pensanti!",
      after: "HA FUNZIONATO? NON SEMBRA!",
    },
  },
  {
    id: 46,
    stat: "CAR",
    category: "Deception",
    check: "Passed",
    parts: {
      before: "No, non io. Mai visto prima.",
      smart:
        "Perché le migliori bugie hanno radici nella verità, e io sono bravo a piantare cose... anche dentro menti.",
      after: "Giuro su Signor Sasso.",
    },
  },
  {
    id: 47,
    stat: "CAR",
    category: "Deception",
    check: "Passed",
    parts: {
      before: "Sì, io mercante di piume rare.",
      smart:
        "Queste piume vengono da posto lontano, molto lontano, forse anche inventato ma molto credibile.",
      after: "Vuoi tre per uno? Solo oggi!",
    },
  },
  {
    id: 48,
    stat: "CAR",
    category: "Deception",
    check: "Failed",
    parts: {
      before: "Io mai rubato. Forse preso in prestito.",
      smart:
        "E poi era a terra, quindi tecnicamente di nessuno, quindi di tutti, quindi di me.",
      after: "ORA IO TI RIDO IN FACCIA PER CONFONDERE!",
    },
  },
  {
    id: 49,
    stat: "CAR",
    category: "Deception",
    check: "Failed",
    parts: {
      before: "Io so mentire bene.",
      smart: "Tipo... io sono re dei cieli. E tu sei... mio cavallo segreto.",
      after: "NON GUARDARE COSÌ! È STORIA ANTICA!",
    },
  },
  {
    id: 50,
    stat: "CAR",
    category: "Performance",
    check: "Passed",
    parts: {
      before: "Adesso Wotan canta.",
      smart:
        "La voce grezza può portare emozione, e l’emozione può piegare anche i cuori più duri.",
      after: "Io chiamarla... Canzone del Colpo Forte.",
    },
  },
  {
    id: 51,
    stat: "CAR",
    category: "Performance",
    check: "Passed",
    parts: {
      before: "Storie? Wotan ne ha tante.",
      smart: "E tutte hanno inizio con pugno, ma finiscono con risata o fuoco.",
      after: "Questa ha anche finale triste. Tipo capra.",
    },
  },
  {
    id: 52,
    stat: "CAR",
    category: "Performance",
    check: "Failed",
    parts: {
      before: "Ora danzo rituale antico!",
      smart:
        "Tradizione dice che chi guarda... piange. Di potere. O di gioia. O—",
      after: "AH NO ASPETTA HA PRESO FUOCO MANTELLO!",
    },
  },
  {
    id: 53,
    stat: "CAR",
    category: "Performance",
    check: "Failed",
    parts: {
      before: "Io so fare imitazione perfetta di orso.",
      smart: "Ecco, ruggito profondo, zampa sinistra avanti e poi—",
      after: "AHIA! HO MORSO ME STESSO!",
    },
  },
];

export default quotes;
