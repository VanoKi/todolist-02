import {Button} from './Button'
import {Task} from "../Task.tsx";
import {useState} from "react";

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: string) => void
  // changeFilter: (val: FilterValueType) => void
}
type TaskProps = {
  id: string
  title: string
  isDone: boolean
}

type FilterValueType = 'All' | 'Active' | 'Completed'

export const TodolistItem = ({
                               title,
                               tasks,
                               removeTask,
}: Props) => {

  const [val, setVal] = useState('All')
  const changeFilter = (val: FilterValueType) => {
    setVal(val)
  }
  // const filter = () => {
  //   let filtredTasks = tasks
  //   if (val === 'Completed') {
  //     filtredTasks = tasks.filter( task => task.isDone)
  //   } else if (val === 'Active') {
  //     filtredTasks =  tasks.filter(task => !task.isDone)
  //   }
  //   return filtredTasks
  // }

  const filter = () => {
    switch (val) {
      case 'Completed': {
        return tasks.filter(task => task.isDone)
      }
      case 'Active': {
        return tasks.filter(task => !task.isDone)
      }
      default: return tasks
    }
  }

  const mappedTasks = filter().map(task => {
    return (
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        isDone={task.isDone}
        removeTask={() => removeTask(task.id)}/>
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
