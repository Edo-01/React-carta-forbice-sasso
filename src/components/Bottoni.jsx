import imgCarta from "../assets/img/icon-paper.svg";
import imgForbice from "../assets/img/icon-scissors.svg";
import imgSasso from "../assets/img/icon-rock.svg";

function BottoneCarta({ dimensione, vincente, sceltaUtente }) {
  return (
    <div onClick={() => sceltaUtente(0)} className="test">
      <div
        className={
          "baseBottonBlu  " + (dimensione === "big" ? "base-big" : null)
        }
      >
        <div
          className={
            "baseCerchioInterno " + (dimensione === "big" ? "img-big" : null)
          }
        >
          <img src={imgCarta} alt="" />
        </div>
      </div>
      {vincente ? (
        <>
          <div className="radiale-vittoria-3"></div>
          <div className="radiale-vittoria-2"></div>
          <div className="radiale-vittoria"></div>
        </>
      ) : null}
    </div>
  );
}
function BottoneForbice({ dimensione, vincente, sceltaUtente }) {
  return (
    <div onClick={() => sceltaUtente(1)} className="test">
      <div
        className={
          "baseBottonGiallo  " + (dimensione === "big" ? "base-big" : null)
        }
      >
        <div
          className={
            "baseCerchioInterno " + (dimensione === "big" ? "img-big" : null)
          }
        >
          <img src={imgForbice} alt="" />
        </div>
      </div>
      {vincente ? (
        <>
          <div className="radiale-vittoria-3"></div>
          <div className="radiale-vittoria-2"></div>
          <div className="radiale-vittoria"></div>
        </>
      ) : null}
    </div>
  );
}
function BottoneSasso({ dimensione, vincente, sceltaUtente }) {
  return (
    <div onClick={() => sceltaUtente(2)} className="test">
      <div
        className={
          "baseBottonRosso  " + (dimensione === "big" ? "base-big" : null)
        }
      >
        <div
          className={
            "baseCerchioInterno " + (dimensione === "big" ? "img-big" : null)
          }
        >
          <img src={imgSasso} alt="" />
        </div>
      </div>
      {vincente ? (
        <>
          <div className="radiale-vittoria-3"></div>
          <div className="radiale-vittoria-2"></div>
          <div className="radiale-vittoria"></div>
        </>
      ) : null}
    </div>
  );
}

export { BottoneCarta, BottoneForbice, BottoneSasso };
