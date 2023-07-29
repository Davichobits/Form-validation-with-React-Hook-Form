import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/form' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
