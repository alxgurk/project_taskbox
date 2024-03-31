import React from 'react';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskState } from '../lib/store';

export default function TaskList() {
  // Импорт необходимых модулей и компонентов

  // Получаем состояние задач из хранилища
  const tasks = useSelector((state) => {
    // Упорядочиваем задачи в порядке закрепления и остальные
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t) => t.state === 'TASK_PINNED'),
      ...state.taskbox.tasks.filter((t) => t.state !== 'TASK_PINNED'),
    ];
    // Фильтруем задачи по состоянию 'TASK_INBOX' и 'TASK_PINNED'
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'
    );
    return filteredTasks;
  });

  // Получаем статус из хранилища
  const { status } = useSelector((state) => state.taskbox);

  // Инициализация функций диспетчера для изменения состояния задачи
  const dispatch = useDispatch();

  const pinTask = (value) => {
    // Отправляем событие Pinned в хранилище
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_PINNED' }));
  };

  const archiveTask = (value) => {
    // Отправляем событие Archive в хранилище
    dispatch(updateTaskState({ id: value, newTaskState: 'TASK_ARCHIVED' }));
  };

  // Создание компонента LoadingRow для отображения состояния загрузки
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  // Если статус загрузки равен 'loading', возвращаем элементы загрузки
  if (status === 'loading') {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  // Если задачи отсутствуют, возвращаем сообщение об отсутствии задач
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">У вас нет задач</p>
          <p className="subtitle-message">Расслабьтесь и отдохните</p>
        </div>
      </div>
    );
  }

  // Возвращаем список задач
  return (
    <div className="list-items" data-testid="success" key={"success"}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </div>
  );
}
