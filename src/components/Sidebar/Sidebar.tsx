import React, { FC } from 'react';
import {resetFilterActionCreator, toggleTagActionCreator } from '../../store/store';
import { ContainerType } from '../../store/types';

const Sidebar: FC<ContainerType> = (props) => {
  const state = props.store.getState().sideBar;
  const dispatch = props.store.dispatch.bind(props.store);

  const toggleTag = (e: React.MouseEvent) =>{
    const text = e.currentTarget.innerHTML;
    dispatch(toggleTagActionCreator(text));
  }

  const resetFilter = (e: React.MouseEvent) => {
    dispatch(resetFilterActionCreator());
  }
  const tagsElements = [...state.tags].map((tag, idx) => {
        if(state.selectedTags.includes(tag)){
          return (<div key={idx} className="sidebar__tag sidebar__tag--selected" onClick={toggleTag}>{tag}</div>)
        } else {
          return <div key={idx} className="sidebar__tag" onClick={toggleTag}>{tag}</div>
        }
      });
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <div>
        {tagsElements}
      </div>
      <div>
        <button onClick={resetFilter} className="sidebar__button"/>
      </div>
    </div>
  );
};

export default Sidebar;
