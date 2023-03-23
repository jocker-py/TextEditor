import React from 'react';

const Modal = (props: any) => {
  const showModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.showModal();
  }
  return (
    <div className="modal__content" onClick={showModal}>
      modal
    </div>
  );
};

export default Modal;