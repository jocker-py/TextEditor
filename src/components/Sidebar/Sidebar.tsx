import React, { FC } from 'react';
import { toggleTagActionCreator } from '../../store/store';
import { ContainerType } from '../../store/types';
import './Sidebar.scss';

const Sidebar: FC<ContainerType> = (props) => {
  const state = props.store.getState().sideBar;
  const dispatch = props.store.dispatch.bind(props.store);

  const toggleTag = (e: React.MouseEvent) =>{
    const text = e.currentTarget.innerHTML;
    dispatch(toggleTagActionCreator(text));
  }
  const tagsElements = [...state.tags].map((tag, idx) => {
        if(state.selectedTags.includes(tag)){
          return (<div key={idx} className="sidebar__tag--selected" onClick={toggleTag}>{tag}</div>)
        } else {
          return <div key={idx} className="sidebar__tag" onClick={toggleTag}>{tag}</div>
        }
      });
  debugger;
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div>
        {tagsElements}
      </div>
      <ol>
        <li>Создание, редактирование, просмотр и удаление заметок;</li>
        <li>Фильтр заметок по тегу;</li>
        <li>Добавление и удаление тегов из списка.</li>
        <li>Данные хранить в json формате.</li>
        <li>Использование CSS препроцессора.</li>
        <li>Использование TypeScript</li>
        <li>Залить на гит</li>
        <li>Залить на netlify</li>
      </ol>
    </div>
  );
};

export default Sidebar;
