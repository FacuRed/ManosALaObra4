import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/main.scss';

function App() {
  // Estado de tareas
  const [tasks, setTasks] = useState([
    { id: 1650000000001, text: "Tarea completada 1", completed: true },
    { id: 1650000000002, text: "Tarea completada 2", completed: true },
    { id: 1650000000003, text: "Tarea pendiente 1", completed: false },
    { id: 1650000000004, text: "Tarea pendiente 2", completed: false },
    { id: 1650000000005, text: "Tarea pendiente 3", completed: false },
  ]);

  // Estado fullscreen
  const [isFullScreen, setIsFullScreen] = useState(false);

  // --- AQUÍ VA EL NUEVO ESTADO DE TEMA ---
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    const root = document.documentElement;
    if (newTheme === 'light') {
      root.style.setProperty('--bg', '#ffffff');
      root.style.setProperty('--text', '#222222');
      root.style.setProperty('--text-50', 'rgba(34,34,34,0.1)');
      root.style.setProperty('--divider', 'rgba(0,0,0,0.1)');
      root.style.setProperty('--border', '#222222');
      root.style.setProperty('--surface-input', 'rgba(0,0,0,0.1)'); // equivale a divider light
      root.style.setProperty('--surface-task', 'rgba(34,34,34,0.1)'); // equivale a text-50 light
    } else {
      root.style.setProperty('--bg', '#222222');
      root.style.setProperty('--text', '#ffffff');
      root.style.setProperty('--text-50', 'rgba(255,255,255,0.2)');
      root.style.setProperty('--divider', 'rgba(255,255,255,0.2)');
      root.style.setProperty('--border', '#ffffff');
      root.style.setProperty('--surface-input', 'rgba(255,255,255,0.2)'); // equivale a divider dark
      root.style.setProperty('--surface-task', 'rgba(255,255,255,0.5)');  // equivale a text-50 dark
    }
  };
  // --- FIN NUEVO ESTADO DE TEMA ---

  // Funciones existentes
  const handleAddTask = (text) => {
    const newTask = { id: Date.now() + Math.random(), text, completed: false };
    setTasks(prev => [newTask, ...prev]);
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <div className="app-container">
      <div className="app-header-container">
        <h1 className="app-header">Lista de tareas de Facu</h1>

        {/* Botón para cambiar tema */}
        <button type="button" onClick={toggleTheme} className="fullscreen-btn">🌓</button>

        {/* Botón fullscreen */}
        <button className="fullscreen-btn" onClick={toggleFullScreen} aria-label="Pantalla Completa">
          {isFullScreen ? "❎" : "⛶"}
        </button>
      </div>

      <div className="divider"></div>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleTask={handleToggleTask} />
    </div>
  );
}

export default App;
