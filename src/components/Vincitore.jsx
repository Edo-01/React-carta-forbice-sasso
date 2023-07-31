import { useEffect } from "react";

function Vincitore({ sceltaUser, sceltaAi, calcolaWinner, setta }) {
  useEffect(() => {
    calcolaWinner();
  }, [sceltaUser, sceltaAi]);

  let winner = false;
  let looser = false;
  let patta = false;
  if (sceltaUser === 0 && sceltaAi === 1) {
    looser = true;
  }
  if (sceltaUser === 0 && sceltaAi === 0) {
    patta = true;
  }
  if (sceltaUser === 0 && sceltaAi === 2) {
    winner = true;
  }
  if (sceltaUser === 1 && sceltaAi === 1) {
    patta = true;
  }
  if (sceltaUser === 1 && sceltaAi === 0) {
    winner = true;
  }
  if (sceltaUser === 1 && sceltaAi === 2) {
    looser = true;
  }
  if (sceltaUser === 2 && sceltaAi === 1) {
    winner = true;
  }
  if (sceltaUser === 2 && sceltaAi === 0) {
    looser = true;
  }
  if (sceltaUser === 2 && sceltaAi === 2) {
    patta = true;
  }

  return (
    <div className="container-winner">
      {winner ? <p>YOU WIN</p> : null}
      {looser ? <p>YOU LOOSE</p> : null}
      {patta ? <p>DROW</p> : null}
      <button onClick={setta}>PLAY AGAIN</button>
    </div>
  );
}

export default Vincitore;
