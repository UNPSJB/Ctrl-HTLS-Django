export default function ModalGenerico({ isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          {children}
          <button onClick={onClose}>Cerrar</button>
        </div>
      </div>
    )
  );
}