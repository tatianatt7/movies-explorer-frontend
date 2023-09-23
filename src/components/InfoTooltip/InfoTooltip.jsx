import './InfoTooltip.css';

const InfoTooltip = ({ isOpen, onClose, message }) => {
  return (
    <dialog className={`popup ${isOpen && 'popup__opened'}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
        >Закрыть</button>
        <p>{JSON.stringify(message)}</p>
      </div>
    </dialog>
  );
};

export default InfoTooltip;
