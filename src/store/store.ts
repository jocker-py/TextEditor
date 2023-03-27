import { TypesAction } from "./enums";
import contentReducer, {initialContentState} from "./reducers/content-reducer";
import modalReducer, { initialModalState } from "./reducers/modal-reducer";
import sideBarReducer, { initialSideBarState } from "./reducers/sideBar-reducer";
import {ActionType, StoreType, INote } from "./types";

const store: StoreType  = {
  _state: {
    content : {...initialContentState},
    modal : {...initialModalState},
    sideBar: {...initialSideBarState},
  },
  _subscriber: null,
  getState (){
    return this._state
  },
  getNotes(){
    return this._state.content.notes;
  },
  setSubscriber(subscriber){
    this._subscriber = subscriber;
  },
  _callSubscriber(){
    this._subscriber && this._subscriber(this._state);
  },
  dispatch(action){
    this._state.content = contentReducer(this._state.content, action);
    this._state.modal = modalReducer(this._state.modal, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action, this.getNotes());
    this._callSubscriber(this._state);
  }
};

type UpdateNotesTextActionCreatorType = (text: string) => ActionType;
export const updateNotesTextActionCreator: UpdateNotesTextActionCreatorType = (text: string) => {
  return {
    type: TypesAction.updateNotesText,
    payload: text,
  }
}

type AddNewNotesActionCreatorType = () => ActionType;
export const addNewNotesActionCreator: AddNewNotesActionCreatorType = () =>{
  return {
    type: TypesAction.addNewNotes
  }
}

type ShowModalActionCreatorType = () => ActionType;
export const showModalActionCreator: ShowModalActionCreatorType  = () => {
  return {
    type: TypesAction.showModal
  }
}

type CloseModalActionCreatorType = () => ActionType;
export const closeModalActionCreator: CloseModalActionCreatorType = () => {
  return {
    type: TypesAction.closeModal
  }
}

type ShowModalAddNotesActionCreatorType = () => ActionType;
export const showModalAddNotesActionCreator: ShowModalAddNotesActionCreatorType = () => {
  return {
    type: TypesAction.showAddNotesModal
  }
}

type SetNoteActionCreatorType = (note: INote) => ActionType;
export const setNoteActionCreator: SetNoteActionCreatorType = (note) => {
  return {
    type: TypesAction.setNote,
    payload: {...note}
  }
}

type ShowNoteActionCreatorType = () => ActionType;
export const showNoteActionCreator: ShowNoteActionCreatorType = () => {
  return {
    type: TypesAction.showNote,
  }
}

type EditNoteActionCreatorType = () => ActionType;
export const editNoteActionCreator: EditNoteActionCreatorType = () => {
  return {
    type: TypesAction.editNote
  }
}

type UpdateNoteActionCreatorType = () => ActionType;
export const updateNoteActionCreator : UpdateNoteActionCreatorType = () => {
  return {
    type: TypesAction.updateNote
  }
}

type RemoveNoteActionCreatorType = () => ActionType;
export const removeNoteActionCreator : RemoveNoteActionCreatorType = () => {
  return {
    type: TypesAction.removeNote
  }
}
type ToggleTagActionCreator = (tag:string) => ActionType;
export const toggleTagActionCreator : ToggleTagActionCreator = (tag) => {
  return {
    type: TypesAction.toggleTag,
    payload: tag,
  }
}

export default store;