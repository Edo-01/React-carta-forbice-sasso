import { useEffect } from "react";
import { BottoneCarta, BottoneForbice, BottoneSasso } from "./Bottoni";
import Vincitore from "./Vincitore";

function VistaSceltaFatta({
  sceltaUser,
  calcolaScaltaAi,
  sceltaAi,
  calcolaWinner,
  winner,
  setta,
}) {
  let sceltaMostrata = null;
  if (sceltaUser === 0) {
    sceltaMostrata = <BottoneCarta dimensione={"big"} vincente={false} />;
  }
  if (sceltaUser === 1) {
    sceltaMostrata = <BottoneForbice dimensione={"big"} vincente={false} />;
  }
  if (sceltaUser === 2) {
    sceltaMostrata = <BottoneSasso dimensione={"big"} vincente={false} />;
  }

  let sceltaMostrataAi = null;
  if (sceltaAi === 0) {
    sceltaMostrataAi = <BottoneCarta dimensione={"big"} vincente={false} />;
  }
  if (sceltaAi === 1) {
    sceltaMostrataAi = <BottoneForbice dimensione={"big"} vincente={false} />;
  }
  if (sceltaAi === 2) {
    sceltaMostrataAi = <BottoneSasso dimensione={"big"} vincente={false} />;
  }

  useEffect(() => {
    let tempoMostra = setTimeout(() => {
      calcolaScaltaAi();
    }, 1500);
    return () => {
      clearTimeout(tempoMostra);
    };
  }, []);

  return (
    <div className="containerVistaSceltaFatta">
      <div className="vistaSceltaFattaRiga1">
        <p>YOUR PICKED</p>
        <p>THE HOUSE PICKED</p>
      </div>
      <div className="vistaSceltaFattaRiga2">
        <div className="test">
          {sceltaMostrata}
          {winner === "user" ? (
            <>
              <div className="radiale-vittoria-3"></div>
              <div className="radiale-vittoria-2"></div>
              <div className="radiale-vittoria"></div>
            </>
          ) : null}
        </div>

        {!sceltaMostrataAi ? <div className="segnapostoBottone"></div> : null}
        {sceltaAi !== null ? (
          <Vincitore
            sceltaUser={sceltaUser}
            sceltaAi={sceltaAi}
            calcolaWinner={calcolaWinner}
            setta={setta}
          />
        ) : null}

        <div className="test">
          {sceltaMostrataAi}
          {winner === "ai" ? (
            <>
              <div className="radiale-vittoria-3"></div>
              <div className="radiale-vittoria-2"></div>
              <div className="radiale-vittoria"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default VistaSceltaFatta;
