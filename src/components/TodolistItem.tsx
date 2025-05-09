import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button.tsx";

type Props = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: string) => void
  changeFilter: (val: FilterValueType) => void
  addTask: (newTitle: string) => void
  changeIsDone: (taskId: string, isDone: boolean) => void
}
type TaskProps = {
  id: string
  title: string
  isDone: boolean
}

export const TodolistItem = ({
                               title,
                               tasks,
                               removeTask,
                               changeFilter,
                               addTask,
                               changeIsDone
}: Props) => {

  const mappedTasks = tasks.map(task => {
    return (
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        isDone={task.isDone}
        removeTask={() => removeTask(task.id)}
        changeIsDone={changeIsDone}
      />
    )
  })

  const [newTitle, setNewTitle] = useState('')

  const changeFilterHAndler = (val: FilterValueType) => {
    changeFilter(val)
  }

  const addTaskHandler = () => {
      addTask(newTitle)
      setNewTitle('')
  }

  const oneKeyDawnHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        addTaskHandler()
      }
  }

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value)
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={newTitle}
          onKeyDown={oneKeyDawnHandler}
          onChange={onChangeHandler}
        />
        <Button title={'+'} onClick={addTaskHandler}/>
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {mappedTasks}
        </ul>
      )}
      <div>
        <Button title={'All'} onClick={() => changeFilterHAndler('All')}/>
        <Button title={'Active'} onClick={() => changeFilterHAndler('Active')}/>
        <Button title={'Completed'} onClick={() => changeFilterHAndler('Completed')}/>
      </div>
    </div>
  )
}
