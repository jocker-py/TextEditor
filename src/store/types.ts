import {ModalTitle, TypesAction } from "./enums"

export interface INewNote  {
  text: string;
  tags: string[];
}

export interface INote extends INewNote {
  id: number;
}

export interface IModal {
  toShow: boolean;
  title: ModalTitle | '';
  readOnly: boolean;
  confirmButton: boolean;
  cancelButton: boolean;
  editButton: boolean;
  removeButton: boolean;
}

export type StateType = {
  modal: IModal;
  content: ContentType;
  sideBar: SideBarType;
}

export type ContentType = {
  notes: INote[];
  currentNote: INote;
  newNote: INewNote;
}

export type SideBarType = {
  value: string,
  selectedTags: string[],
  tags: string[],
}

export type ActionType = {
  type: TypesAction;
  payload?: string | INote;
}

export type SubcriberFunction = (state: StateType) => void;
export type SubcriberType = null | SubcriberFunction;

export type StoreType = {
  _state: StateType;
  _subscriber: SubcriberType;
  _callSubscriber: SubcriberFunction;
  setSubscriber: (subscriber: SubcriberType) => void;
  getState: () => StateType;
  getNotes: () => INote[];
  dispatch: (action: ActionType) => void;
}

export type ContainerType = {store: StoreType};
