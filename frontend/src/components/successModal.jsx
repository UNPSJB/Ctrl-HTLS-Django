// SuccessModal.js
import React from 'react';

const SuccessModal = ({ show, onClose }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${show ? '' : 'hidden'}`}>
      <div className="bg-green-200 text-green-800 p-3 rounded">
        Creado con éxito
        <button className="ml-2 text-green-800" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;