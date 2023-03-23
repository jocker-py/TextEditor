import { TypesAction } from "./enums";
import {ActionType, StoreType } from "./types";

const store: StoreType  = {
  _state: {
    newNotesText: '',
    notes : [],
    modal : true,
  },
  _subscriber: null,
  getState (){
    return this._state
  },
  setSubscriber(subscriber){
    this._subscriber = subscriber;
  },
  _callSubscriber(){
    this._subscriber && this._subscriber(this._state);
  },
  dispatch(action){
    if(action.type === TypesAction.updateNotesText){
      this._state.newNotesText = action.payload || '';
    } else if(action.type === TypesAction.addNewNotes){
      const newNotes = {
        id: this._state.notes.length + 1, // TODO: edit this later
        text: this._state.newNotesText
      }
      this._state.newNotesText = '';
      this._state.notes = [...this._state.notes, newNotes];
    } else if(action.type === TypesAction.showModal){
      this._state.modal = true;
    } else if(action.type === TypesAction.closeModal){
      this._state.modal = false;
    }
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

export default store;