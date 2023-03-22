import React, { ChangeEvent } from 'react';
import './App.scss';
import { changeMessageActionCreator } from './store/store';
import { StoreType } from './store/types';

type AppPropsType = {store: StoreType};
function App(props: AppPropsType) {
  const state = props.store.getState();
  const dispatch = props.store.dispatch.bind(props.store);
  const value = state.value;
  const onChangeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
      dispatch(changeMessageActionCreator(text))
  }
  return (
    <div className="App">
      <div>
        <textarea value={value} onChange={onChangeMessageText} placeholder="Enter your note..."/>
      </div>
      <div>
        <button>add Note</button>
      </div>
    </div>
  );
}

export default App;
