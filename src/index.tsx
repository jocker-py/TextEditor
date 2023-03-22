import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const renderThree = () => {
  root.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>
  );
}

renderThree();
store.setSubscriber(renderThree);
store._callSubscriber(store.getState());

