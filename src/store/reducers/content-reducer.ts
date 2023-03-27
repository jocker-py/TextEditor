import { TypesAction } from "../enums";
import {ActionType, ContentType, INewNote, INote } from "../types";
const removeDuplicates = (arr: string[]) =>{
  const mySet = new Set(arr);
  return Array.from(mySet);
}

const getTags = (text:string): string[] =>{
  const pattern = /#(\w+)/g;
  const match = text.match(pattern);
  return match && match.length ? removeDuplicates(match) : [];
}

const initialCurrentNoteState: INote = {
  text: '',
  id : -1,
  tags: [],
}

const initialNewNoteState: INewNote = {
  text: '',
  tags: [],
}

export const initialContentState: ContentType = {
  currentNote: {...initialCurrentNoteState},
  newNote: {...initialNewNoteState},
  notes: [],
}


type contentReducerType = (state: ContentType, action:ActionType) => ContentType;
const contentReducer: contentReducerType = (state = initialContentState, action) => {
  switch (action.type){
    case TypesAction.updateNotesText:
      state.newNote.text = action.payload as string || '';
      state.newNote.tags = getTags(state.newNote.text);
      return state
    case TypesAction.addNewNotes:
      const idList = state.notes.map(item => item.id);
      const newId = idList.length ? Math.max(...idList) + 1 : 0;
      const newNotes = {
        id: newId,
        text: state.newNote.text,
        tags: getTags(state.newNote.text),
      }
      state.newNote = {...initialNewNoteState};
      state.notes = [...state.notes, newNotes];
      return state
    case TypesAction.closeModal:
      state.newNote = {...initialNewNoteState};
      state.currentNote = {...initialCurrentNoteState};
      return state
    case TypesAction.setNote:
      state.currentNote = {...action.payload as INote};
      return state
    case TypesAction.editNote:
      state.newNote.text = state.currentNote.text;
      return state
    case TypesAction.updateNote:
      const currentId = state.currentNote.id;
      const idx = state.notes.findIndex(note => note.id === currentId);
      const updateNote = {
        id: currentId,
        text: state.newNote.text,
        tags: getTags(state.newNote.text),
      }
      state.notes[idx] = {...updateNote};
      state.newNote = {...initialNewNoteState};
      state.notes = [...state.notes];
      return state
    case TypesAction.removeNote:
      const currentNote = state.currentNote as INote;
      state.notes = [...state.notes.filter((note) => note.id !== currentNote.id)];
      return state;
    default: return state;
  }
}

export default contentReducer;