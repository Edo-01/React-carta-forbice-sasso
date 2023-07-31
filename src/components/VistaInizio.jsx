import { BottoneCarta, BottoneForbice, BottoneSasso } from "./Bottoni";
function VistaInizio({ sceltaUtente }) {
  return (
    <div className="containerVistaInizio">
      <div className="containerVistaInizioRigaAlta">
        <BottoneCarta sceltaUtente={sceltaUtente} dimensione={""} />
        <BottoneForbice sceltaUtente={sceltaUtente} dimensione={""} />
      </div>
      <div className="containerVistaInizioRigaBassa">
        <BottoneSasso sceltaUtente={sceltaUtente} dimensione={""} />
      </div>
    </div>
  );
}

export default VistaInizio;
