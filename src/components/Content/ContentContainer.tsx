import React from 'react';
import { FC } from 'react';
import {editNoteActionCreator, removeNoteActionCreator,
  setNoteActionCreator, showModalAddNotesActionCreator, showNoteActionCreator} from '../../store/store';
import { ContainerType, INote } from '../../store/types';
import Content from './Content';


const ContentContainer: FC<ContainerType> = (props) => {
  const state = props.store.getState().content;
  const selectedTags = props.store.getState().sideBar.selectedTags;
  const dispatch = props.store.dispatch.bind(props.store);
  const isContainSomeTag = (arr: string[]) => {
    return arr.some(arg => selectedTags.includes(arg));
  };
  const getFilteredNotes = () => {
    return state.notes.filter(note => isContainSomeTag(note.tags));
  }
  const filteredNotes = selectedTags.length ? getFilteredNotes() : state.notes;
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
        notes={filteredNotes}
        showModalNote={showModalNote}
        showModalAddNotes={showModalAddNotes}
        showModalEditNoteItem={showModalEditNoteItem}
        removeNote={removeNote}
      />
  );
};

export default ContentContainer;