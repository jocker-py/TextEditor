import React, { FC } from 'react';
import { NoteType } from '../../store/types';
import './Content.scss';

type ContentType = {value: string, notes:NoteType[] , onUpadteNotesText: (text: string) => void, addNotes : () => void};
const Content: FC<ContentType> = ({value, notes, onUpadteNotesText, addNotes}) => {
  const notesElements = notes.map((note) => <div key={note.id}>{note.text}</div>);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    onUpadteNotesText(text);
  }
  return (
    <div className="content">
      <div>
        <textarea value={value} onChange={onChange} placeholder="Enter your note..."/>
      </div>
      <div>
        <button onClick={addNotes}>add Note</button>
      </div>
      <div>{notesElements}</div>
    </div>
  );
};

export default Content;