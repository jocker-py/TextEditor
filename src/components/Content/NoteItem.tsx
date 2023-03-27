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
  const tagElements = <div>
    {props.note.tags.map((tag, idx) => <span className="content__tag-item" key={idx}> {tag} </span>)}
  </div>
  const textElement = props.note.text.replace(/(#(\w+))/g, '$1#');
  const result = textElement.split('#').map((item,idx) => {
    if(idx % 2 !== 0){
      return <span className="blue">{`#${item}`}</span>
    } else {
      return <span>{item}</span>
    }
  })
  return (
    <div onClick={showNoteItem} id={props.note.id.toString()} className="content__item">
      <div>{result}</div>
      <div className="content__tag-list">
        {tagElements}
      </div>
      <div className="content__buttons">
        <button className="content__button--edit" onClick={showEditNoteItem}/>
        <button className="content__button--remove" onClick={removeNote}/>
      </div>
    </div>
  );
};

export default NoteItem;