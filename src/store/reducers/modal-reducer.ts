import {ModalTitle, TypesAction } from "../enums";
import {ActionType, IModal } from "../types";

export const initialModalState: IModal = {
  toShow: false,
  readOnly: false,
  confirmButton: false,
  cancelButton: false,
  removeButton: false,
  editButton: false,
  title: '',
}



type modalReducerType = (state: IModal, action: ActionType) => IModal;
const modalReducer: modalReducerType = (state = initialModalState, action) => {
  switch (action.type){
    case TypesAction.showModal:
      state.toShow = true;
      return state;
    case TypesAction.closeModal:
      state = {...initialModalState};
      return state;
    case TypesAction.showAddNotesModal:
      state.toShow = true;
      state.readOnly = false;
      state.confirmButton = true;
      state.cancelButton = true;
      state.title = ModalTitle.createNewNote
      return state;
    case TypesAction.showNote:
      state.toShow = true;
      state.readOnly = true;
      state.confirmButton = false;
      state.cancelButton = true;
      state.removeButton = true;
      state.editButton = true;
      state.title = '';
      return state
    case TypesAction.editNote:
      state.toShow = true;
      state.readOnly = false;
      state.title = ModalTitle.editNote;
      state.confirmButton = true;
      state.cancelButton = true;
      state.removeButton = false;
      state.editButton = false;
      return state
    case TypesAction.updateNote:
      state.toShow = true;
      state.readOnly = true;
      state.confirmButton = false;
      state.cancelButton = true;
      state.removeButton = true;
      state.editButton = true;
      state.title = '';
      return state
    default :
      return state;
  }
}


export default modalReducer;