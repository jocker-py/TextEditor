import React, { FC } from 'react';
import {closeModalActionCreator, showModalActionCreator } from '../../store/store';
import { ContainerType } from '../../store/types';
import Modal from './Modal';
import './ModalContainer.scss';

const ModalContainer: FC<ContainerType> = ({store}) => {
  const isShow = store.getState().modal;
  const dispatch = store.dispatch.bind(store);
  const closeModal = () => {
    dispatch(closeModalActionCreator());
  }
  const showModal = () => {
    dispatch(showModalActionCreator());
  }
  return isShow ?
    <div className="modal__container-show" onClick={closeModal}>
      <Modal showModal={showModal}/>
    </div> :
    <div className="modal__container-hide" />;
};

export default ModalContainer;