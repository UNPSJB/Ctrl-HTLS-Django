export default function Modal({ title, isOpen, onClose, children }) {
  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">{title}</p>
              <button onClick={onClose} className="text-black close-modal">
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  );
}
