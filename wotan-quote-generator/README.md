# Wotan Quote Generator 🪨🗣️

Una Single Page Application dedicata a **Wotan**, il barbaro con 7 di Intelligenza ma un cuore pieno di... sassolini.

Questo progetto genera frasi umoristiche e nonsense in stile Wotan, in base al tipo di check effettuato durante una sessione di D&D 5e: **Intelligenza**, **Saggezza** o **Carisma**. Ogni frase è divisa in tre parti, e varia a seconda del successo o fallimento del tiro.

---

## 🛠️ Tech Stack

- **React** + **Vite** — per la creazione della SPA
- **Tailwind CSS** — per uno stile leggero ma fantasy
- **JavaScript** — semplice e diretto, come Wotan
- **File locale `quotes.js`** per il database delle frasi

---

## 📂 Struttura del progetto

```
Wotan_generator/
└─ wotan-quote-generator/
   ├─ public/
   │  └─ Situazioni.txt
   ├─ src/
   │  ├─ assets/
   │  ├─ components/
   │  │  ├─ Dropdown.jsx
   │  │  └─ QuoteCard.jsx
   │  ├─ data/
   │  │  └─ quotes.js
   │  ├─ App.jsx
   │  ├─ main.jsx
   │  └─ index.css
   ├─ README.md
   └─ vite.config.js
```

---

## 🧠 Struttura delle frasi

Ogni frase è un oggetto con questa struttura:

```js
{
  id: 1,
  stat: "INT",          // INT, SAG o CAR
  category: "Arcana",   // Sottocategoria del tiro
  check: "Passed",      // "Passed" o "Failed"
  parts: {
    before: "...",      // Parte iniziale, stile grezzo
    smart: "...",       // Parte “intelligente” (da mostrare in corsivo o evidenziata)
    after: "..."        // Crollo finale, assurdo o nonsense
  }
}
```

---

## 🤪 Humor e tono

Il tono delle frasi è:

- **Assurdamente serio → immediatamente idiota**
- **Grezzo, ignorante, ma con scatti di “genio” (finto)**
- **Mai specifico**, niente nomi di luoghi, date o PNG
- **Estremamente adattabile** a qualunque tipo di scena

---

## 📜 Come contribuire

1. Aggiungi nuove frasi in `src/data/quotes.js`
2. Segui la struttura esistente
3. Rispetta il tono comico e generico del personaggio
4. Non inserire mai riferimenti troppo specifici

---

## ✨ Esempio frase

```js
{
  id: 5,
  stat: "INT",
  category: "Natura",
  check: "Failed",
  parts: {
    before: "ANIMALE BRUTTO E GAROSO,",
    smart: " Ma l'animale non attacca per rabbia. Attacca per... una frattura tra l’istinto e la convivenza forzata col territorio antropizzato dalla—",
    after: "QUESTO COMUNQUE HA DENTI",
  }
}
```

---

## 🧠 Creato da

Bubbo

_“Attento alla quarta cosa.” — Signor Sasso_
