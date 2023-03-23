import { TypesAction } from "./enums"

export type NoteType = {
  text: string;
  id: number;
}

export type StateType = {
  newNotesText: string;
  notes: NoteType[];
  modal: boolean;
}

export type ActionType = {
  type: TypesAction.updateNotesText | TypesAction.addNewNotes | TypesAction.removeNotes | TypesAction.editNotes | TypesAction.showModal | TypesAction.closeModal;
  payload?: string;
}

export type SubcriberFunction = (state: StateType) => void;
export type SubcriberType = null | SubcriberFunction;

export type StoreType = {
  _state: StateType;
  _subscriber: SubcriberType;
  _callSubscriber: SubcriberFunction;
  setSubscriber: (subscriber: SubcriberType) => void;
  getState: () => StateType;
  dispatch: (action: ActionType) => void;
}

export type ContainerType = {store: StoreType};
