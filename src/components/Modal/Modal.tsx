import React, { FC } from 'react';

type ModalType = {
  title: string;
  showModal: () => void;
  tags: string[];
  onUpadteNotesText: (text: string) => void;
  value: string;
  addNotes : () => void;
  closeModal: () => void;
  showEditNote:() => void;
  showRemoveNote:() => void;
  confirmButton: boolean;
  cancelButton: boolean;
  removeButton: boolean;
  editButton: boolean;
  readOnly : boolean;
  currentValue: string;
  currentId: number;
  currentTags: string[];
}
const Modal: FC<ModalType> = ({title, value,  tags, addNotes, showModal,
                                onUpadteNotesText, closeModal, showEditNote,
                                showRemoveNote, confirmButton, cancelButton,
                                editButton,removeButton, readOnly, currentValue}) => {
  const stopCloseModal = (e: React.MouseEvent) => e.stopPropagation();
  const onCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeModal();
  }
  const addNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    addNotes();
    closeModal();
  }
  const tagsElements = tags.map((tag, idx) => <span key={tag + idx}> {tag} </span>)
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    onUpadteNotesText(text);
  }
  const onEditNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    showEditNote();
  }
  const onRemoveNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    showRemoveNote();
  }
  const textAreaElements = <div>
    <textarea value={value} onChange={onChange} placeholder="Enter your note..."/>
    <div>{tagsElements}</div></div>
  const textElement = <p>{currentValue}</p>
  return (
    <div className="modal__content" onClick={stopCloseModal}>
     <h3 className="modal__title">{title}</h3>
      {readOnly ?  textElement : textAreaElements}
      <div className="modal__buttons">
        {confirmButton && <button className="modal__button-confirm" onClick={addNote}>Confirm</button>}
        {editButton && <button className="modal__button-edit" onClick={onEditNote}>Edit</button>}
        {removeButton && <button className="modal__button-remove" onClick={onRemoveNote}>Remove</button>}
        {cancelButton && <button className="modal__button-cancel" onClick={onCloseModal}>Cancel</button>}
      </div>
    </div>
  );
};

export default Modal;