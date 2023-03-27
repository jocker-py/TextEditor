import React, { FC } from 'react';
import { INote } from '../../store/types';
import './Content.scss';
import NoteItem from './NoteItem';

type ContentType = {
  notes:INote[],
  showModalAddNotes:() => void,
  showModalNote:(note:INote) => void;
  showModalEditNoteItem:(note: INote) => void
  removeNote: (note: INote) => void
}
const Content: FC<ContentType> = ({notes,
                                    showModalAddNotes,
                                    showModalNote,
                                    showModalEditNoteItem,
                                    removeNote}) => {
  const notesElements = notes.map((note) =>
    <NoteItem key={note.id} note={note}
              showModalNote={showModalNote}
              showModalEditNoteItem={showModalEditNoteItem}
              removeNote={removeNote}
    />);
  const phrase = <div>List is empty</div>
  return (
    <div className="content">
      <button onClick={showModalAddNotes}>Add Note</button>
      {notesElements.length ? notesElements : phrase}
    </div>
  );
};

export default Content;