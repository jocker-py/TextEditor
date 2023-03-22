import { TypesAction } from "./enums"

export type StateType = {
  value: string;
}

export type ActionType = {
  type: TypesAction.changeMessage;
  payload: string;
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


