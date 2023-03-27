import React from 'react';
import { FC } from 'react';
import {editNoteActionCreator, removeNoteActionCreator,
  setNoteActionCreator, showModalAddNotesActionCreator, showNoteActionCreator} from '../../store/store';
import { ContainerType, INote } from '../../store/types';
import Content from './Content';


const ContentContainer: FC<ContainerType> = (props) => {
  const state = props.store.getState().content;
  const dispatch = props.store.dispatch.bind(props.store);
  const showModalAddNotes = () => {
    dispatch(showModalAddNotesActionCreator());
  }
  const showModalNote = (note: INote) =>{
    dispatch(setNoteActionCreator(note));
    dispatch(showNoteActionCreator());
  }
  const showModalEditNoteItem = (note: INote) =>{
    dispatch(setNoteActionCreator(note));
    dispatch(editNoteActionCreator());
  }
  const removeNote = (note: INote) => {
    dispatch(setNoteActionCreator(note));
    dispatch(removeNoteActionCreator());
  }
  return (
      <Content
        notes={state.notes}
        showModalNote={showModalNote}
        showModalAddNotes={showModalAddNotes}
        showModalEditNoteItem={showModalEditNoteItem}
        removeNote={removeNote}
      />
  );
};

export default ContentContainer;