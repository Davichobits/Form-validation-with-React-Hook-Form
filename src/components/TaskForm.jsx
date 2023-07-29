import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../features/tasks/taskSlice"
import {v4 as uuid} from 'uuid'

export const TaskForm = () => {

  const [task, setTask] = useState({
    title: '',
    description:''
  })

  const dispatch =  useDispatch()

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
      id: uuid(),
      title: e.target[1].value,
      description: e.target[1].value,
      completed: false,
    }
    dispatch(addTask(newTask))
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input name='title' type="text" placeholder='title' />
      <textarea name="description" placeholder='description'></textarea>
      <input type="submit" />
    </form>
  )
}
