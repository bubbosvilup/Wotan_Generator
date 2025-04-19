import React from "react";
import WotanQuoteMachine from "../modules/WotanQuoteMachine/WQM_index";

function Diario() {
  return (
    <main>
      <h1>Il Diario di Wotan</h1>
      <p>
        Benvenuto nel diario sacro e sgrammaticato di Wotan. Qui troverai
        pensieri profondi (forse), memorie di sassi, saggezza confusa e il suono
        del caos. Procedi a tuo rischio e pericolo.
      </p>
      <WotanQuoteMachine />
    </main>
  );
}

export default Diario;
