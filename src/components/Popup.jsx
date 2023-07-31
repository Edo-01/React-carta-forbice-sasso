import imgRegole from "../assets/img/image-rules.svg";
import imgClose from "../assets/img/icon-close.svg";
function Popup({ mostraPopup }) {
  return (
    <>
      <div className="container-popup">
        <div className="container-popup-row-1">
          <p>RULES</p>
          <img
            style={{ cursor: "pointer" }}
            onClick={mostraPopup}
            src={imgClose}
            alt=""
          />
        </div>
        <div className="container-popup-row-2">
          <img src={imgRegole} alt="" />
        </div>
      </div>
      <div className="oscurante"></div>
    </>
  );
}

export default Popup;
