import { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => setNewTask(e.target.value);

  const handleAddClick = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return; // no guardamos tareas vacías
    onAddTask(trimmed);    // llamamos al handler del padre
    setNewTask('');        // limpiamos el input
  };

  return (
    <section className="task-input">
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={newTask}
        onChange={handleChange}
        aria-label="Nueva tarea"
      />
      <button className="fullscreen-btn" type="button" onClick={handleAddClick}>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</button>

    </section>
  );
}

export default TaskInput;
