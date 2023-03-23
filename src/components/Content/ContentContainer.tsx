import React from 'react';
import { FC } from 'react';
import {addNewNotesActionCreator, updateNotesTextActionCreator } from '../../store/store';
import { ContainerType } from '../../store/types';
import Content from './Content';


const ContentContainer: FC<ContainerType> = (props) => {
  const state = props.store.getState();
  const dispatch = props.store.dispatch.bind(props.store);
  const onUpadteNotesText = (text: string) => {
    dispatch(updateNotesTextActionCreator(text))
  }
  const addNotes = () => {
    dispatch(addNewNotesActionCreator());
  }
  return (
      <Content value={state.newNotesText} notes={state.notes} onUpadteNotesText={onUpadteNotesText} addNotes={addNotes}/>
  );
};

export default ContentContainer;