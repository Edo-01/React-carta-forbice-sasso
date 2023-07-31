import { useState } from "react";
import Score from "./components/Score";
import Viste from "./components/Viste";
import Popup from "./components/Popup";

function App() {
  const [sceltaUser, setSceltaUser] = useState(null); // 0-1-2
  const [sceltaAi, setSceltaAi] = useState(null); // 0-1-2
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(null); // user , ai, pari
  const [popupActive, setPopupActive] = useState(false);

  function sceltaUtente(par) {
    setSceltaUser(par);
  }
  function calcolaScaltaAi() {
    let numCasuale = (Math.random() * 2).toFixed(0);
    console.log(numCasuale);
    setSceltaAi(+numCasuale);
  }

  function calcolaWinner() {
    if (sceltaUser === 0 && sceltaAi === 1) {
      setWinner("ai");
      if (score === 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }
    if (sceltaUser === 0 && sceltaAi === 0) {
      setWinner("pari");
    }
    if (sceltaUser === 0 && sceltaAi === 2) {
      setWinner("user");
      setScore(score + 1);
    }
    if (sceltaUser === 1 && sceltaAi === 1) {
      setWinner("pari");
    }
    if (sceltaUser === 1 && sceltaAi === 0) {
      setWinner("user");
      setScore(score + 1);
    }
    if (sceltaUser === 1 && sceltaAi === 2) {
      setWinner("ai");
      if (score === 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }
    if (sceltaUser === 2 && sceltaAi === 1) {
      setWinner("user");
      setScore(score + 1);
    }
    if (sceltaUser === 2 && sceltaAi === 0) {
      setWinner("ai");
      if (score === 0) {
        setScore(0);
      } else {
        setScore(score - 1);
      }
    }
    if (sceltaUser === 2 && sceltaAi === 2) {
      setWinner("pari");
    }
  }

  function setta() {
    setSceltaUser(null);
    setSceltaAi(null);
    setWinner(null);
  }
  function mostraPopup() {
    if (popupActive) {
      setPopupActive(false);
    } else {
      setPopupActive(true);
    }
  }
  return (
    <div>
      <div className="containerScore">
        <Score score={score} />
      </div>
      <div className="containerView">
        <Viste
          sceltaUtente={sceltaUtente}
          sceltaUser={sceltaUser}
          calcolaScaltaAi={calcolaScaltaAi}
          sceltaAi={sceltaAi}
          calcolaWinner={calcolaWinner}
          winner={winner}
          setta={setta}
          mostraPopup={mostraPopup}
        />
      </div>
      <div className="containerButton">
        <button onClick={mostraPopup} className="buttonRules">
          RULES
        </button>
      </div>
      {popupActive ? <Popup mostraPopup={mostraPopup} /> : null}
    </div>
  );
}

export default App;
