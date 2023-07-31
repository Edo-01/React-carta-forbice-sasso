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
        />
      )}
    </div>
  );
}

export default Viste;
