function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className="task-item">
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
        />
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
      </label>
      <div className="task-actions">
        <button type="button" onClick={onDelete} aria-label={`Eliminar ${task.text}`}>🗑️</button>
      </div>
    </li>


  );
}

export default TaskItem;
