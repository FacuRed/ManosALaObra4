import TaskItem from './TaskItem';

function TaskList({ tasks, onDeleteTask, onToggleTask }) {
  if (!tasks || tasks.length === 0) {
    return <p className="task-empty">No hay tareas por ahora 🥳🎉🎉</p>;
  }

  return (
    <section className="task-list">
      <h2 className="task-list-header">Tareas</h2>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={() => onDeleteTask(task.id)}
            onToggle={() => onToggleTask(task.id)}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
