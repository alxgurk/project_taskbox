import React from 'react';
// Импорт React для использования JSX и создания компонентов

import PropTypes from 'prop-types';
// Импорт PropTypes для определения типов свойств компонентов

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask}) {
// Объявление функционального компонента Task с параметрами task, onArchiveTask и onPinTask

  return (
    // Возвращение JSX-разметки
    <div className={`list-item ${state}`}>
    
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
      
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
        />
        
      </label>

      <label htmlFor="title" aria-label={title} className="title">
      
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
        />
        
      </label>

      {state !== "TASK_ARCHIVED" && (
      // Условие для отображения кнопки только если state не равно "TASK_ARCHIVED"
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
        
          <span className={`icon-star`} />
        </button>
      )}
      
    </div>
    // Закрытие элемента div
  );
}

Task.propTypes = {
  task: PropTypes.shape({
  // Комментарий к свойству id
  id: PropTypes.string.isRequired,
  // Определение типа строки для свойства id, которая является обязательной
  title: PropTypes.string.isRequired,
  // Определение типа строки для свойства title, которая является обязательной
  state: PropTypes.string.isRequired,
  // Определение типа строки для свойства state, которая является обязательной
  }),
  onArchiveTask: PropTypes.func,
  // Определение типа функции для свойства onArchiveTask
  onPinTask: PropTypes.func,
  // Определение типа функции для свойства onPinTask
};
// Завершение определения propTypes для компонента Task