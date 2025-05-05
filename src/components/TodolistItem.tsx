import {Button} from './Button'
import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";
import {useState} from "react";

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: number) => void
  // changeFilter: (val: FilterValueType) => void
}
type TaskProps = {
  id: number
  title: string
  isDone: boolean
}

export const TodolistItem = ({
                               title,
                               tasks,
                               removeTask,
                               // changeFilter
}: Props) => {

  const [val, setVal] = useState('All')
  const changeFilter = (val: FilterValueType) => {
    setVal(val)
  }

  let filtredTasks = tasks
  if (val === 'Completed') {
    filtredTasks = tasks.filter( task => task.isDone)
  } else if (val === 'Active') {
    filtredTasks =  tasks.filter(task => !task.isDone)
  }

  const mappedTasks = filtredTasks.map(task => {
    return (
      <Task title={task.title} isDone={task.isDone} removeTask={() => removeTask(task.id)}/>
    )
  })

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input/>
        <Button title={'+'}/>
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {mappedTasks}
        </ul>
      )}
      <div>
        {/*<Button title={'All'}/>*/}
        {/*<Button title={'Active'}/>*/}
        {/*<Button title={'Completed'}/>*/}
        <button onClick={() =>changeFilter('All')}>All</button>
        <button onClick={() =>changeFilter('Active')}>Active</button>
        <button onClick={() =>changeFilter('Completed')}>Completed</button>
      </div>
    </div>
  )
}
