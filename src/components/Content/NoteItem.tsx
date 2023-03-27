import React, { FC } from 'react';
import { INote } from '../../store/types';

type NoteItemType = {
  note: INote,
  showModalNote: (note:INote) => void,
  showModalEditNoteItem: (note: INote) => void
  removeNote: (note: INote) => void,
}
const NoteItem: FC<NoteItemType> = (props) => {
  const showNoteItem = (e: React.MouseEvent) => {
    props.showModalNote(props.note);
  };
  const showEditNoteItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.showModalEditNoteItem(props.note);
  }
  const removeNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    props.removeNote(props.note);
  }
  return (
    <div onClick={showNoteItem} id={props.note.id.toString()}>
      <div>Text - {props.note.text}</div>
      <div>Tags - {
        props.note.tags.map((tag, idx) => <span key={idx}> {tag} </span>)
      }
      <button onClick={showEditNoteItem}>Edit</button>
        <button onClick={removeNote}>Remove</button>
      </div>
    </div>
  );
};

export default NoteItem;