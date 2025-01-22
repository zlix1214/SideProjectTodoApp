import React from 'react';

const Modal2 = ({ message, onClose, onConfirm }) => {
  return (
    <div className='modal2-overlay'>
      <div className='modal2'>
        <p>{message}</p>
        <button onClick={onConfirm}>確定</button>
        <button onClick={onClose}>取消</button>
      </div>
    </div>
  );
};

export default Modal2;