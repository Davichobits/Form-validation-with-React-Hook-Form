import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'

function App() {
  return (
    <>
      <h1>Ingresa una tarea:</h1>
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
