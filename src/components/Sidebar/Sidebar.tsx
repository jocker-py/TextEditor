import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
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