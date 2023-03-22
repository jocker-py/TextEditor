import { TypesAction } from "./enums";
import {ActionType, StoreType } from "./types";

const store: StoreType  = {
  _state: {
    value: 'asfasfa',
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
    if(action.type === TypesAction.changeMessage){
      this._state.value = action.payload;
    }
    this._callSubscriber(this._state);
  }
};

type changeMessageActionCreatorType = (text: string) => ActionType;
export const changeMessageActionCreator: changeMessageActionCreatorType = (text: string) => {
  return {
    type: TypesAction.changeMessage,
    payload: text,
  }
}

export default store;