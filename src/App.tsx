import React, { ChangeEvent } from 'react';
import './App.scss';
import ContentContainer from './components/Content/ContentContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ModalContainer from './components/Modal/ModalContainer';
import Sidebar from './components/Sidebar/Sidebar';
import { StoreType } from './store/types';

type AppPropsType = {store: StoreType};
function App(props: AppPropsType) {
  return (
    <div className="App">
      <Header/>
      <ModalContainer store={props.store}/>
      <ContentContainer store={props.store}/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
