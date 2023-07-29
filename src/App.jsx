import { useSelector } from 'react-redux'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import './App.css'

function App() {
  const taskState = useSelector(state => state.tasks)
  return (
    <>
      <h1>Hola!</h1>
      <TaskForm />
      <TaskList />
    </>
  )
}

export default App
