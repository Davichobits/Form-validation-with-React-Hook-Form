import { useDispatch } from "react-redux"
import { addTask } from "../features/tasks/taskSlice"
import {v4 as uuid} from 'uuid'
import { useNavigate } from "react-router-dom"

export const TaskForm = () => {

  const dispatch =  useDispatch()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: e.target[0].value,
      description: e.target[1].value,
      completed: false,
    }
    dispatch(addTask(newTask))
    navigate('/')
  }

  return (
    <>
      <h2>Ingresa una tarea:</h2>
      <form action="" onSubmit={handleSubmit}>
        <input name='title' type="text" placeholder='title' />
        <textarea name="description" placeholder='description'></textarea>
        <input type="submit" />
      </form>
    </>
  )
}
