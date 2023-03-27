import React, { FC } from 'react';
import {addNewNotesActionCreator,
  closeModalActionCreator,
  editNoteActionCreator,
  removeNoteActionCreator,
  showModalActionCreator,
  updateNoteActionCreator,
  updateNotesTextActionCreator} from '../../store/store';
import { ContainerType } from '../../store/types';
import Modal from './Modal';

const ModalContainer: FC<ContainerType> = ({store}) => {
  const state = store.getState();
  const dispatch = store.dispatch.bind(store);
  const onUpadteNotesText = (text: string) => {
    dispatch(updateNotesTextActionCreator(text))
  }
  const addNotes = () => {
    if(state.content.currentNote.id !== -1){
      dispatch(updateNoteActionCreator());
    } else {
      dispatch(addNewNotesActionCreator());
    }
  }
  const closeModal = () => {
    dispatch(closeModalActionCreator());
  }
  const showModal = () => {
    dispatch(showModalActionCreator());
  }
  const editNote = () => {
    dispatch(editNoteActionCreator());
  }
  const removeNote = () => {
    dispatch(removeNoteActionCreator());
    closeModal();
  }

  return state.modal.toShow ?
    <div>
      <div className="shadow" onClick={closeModal}>
      </div>
      <Modal showModal={showModal}
             title={state.modal.title}
             value={state.content.newNote.text}
             currentValue={state.content.currentNote.text}
             currentId={state.content.currentNote.id}
             currentTags={state.content.currentNote.tags}
             tags={state.content.newNote.tags}
             onUpadteNotesText={onUpadteNotesText}
             addNotes={addNotes}
             closeModal={closeModal}
             showEditNote={editNote}
             showRemoveNote={removeNote}
             confirmButton={state.modal.confirmButton}
             cancelButton={state.modal.cancelButton}
             editButton={state.modal.editButton}
             removeButton={state.modal.removeButton}
             readOnly={state.modal.readOnly}

      />
    </div> :
    <div className="modal__container-hide" />;
};

export default ModalContainer;