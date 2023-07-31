import VistaInizio from "./VistaInizio";
import VistaSceltaFatta from "./VistaSceltaFatta";

function Viste({
  sceltaUtente,
  sceltaUser,
  calcolaScaltaAi,
  sceltaAi,
  calcolaWinner,
  winner,
  setta,
  mostraPopup,
}) {
  return (
    <div>
      {sceltaUser === null ? (
        <VistaInizio sceltaUtente={sceltaUtente} />
      ) : (
        <VistaSceltaFatta
          sceltaUser={sceltaUser}
          calcolaScaltaAi={calcolaScaltaAi}
          sceltaAi={sceltaAi}
          calcolaWinner={calcolaWinner}
          winner={winner}
          setta={setta}
          mostraPopup={mostraPopup}
        />
      )}
    </div>
  );
}

export default Viste;
