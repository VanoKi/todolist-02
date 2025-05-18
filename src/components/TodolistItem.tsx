import {Task} from "../Task.tsx";
import {FilterValueType} from "../App.tsx";
import {useState, KeyboardEvent, ChangeEvent} from "react";
import {Button} from "./Button.tsx";

type TodoListItemProps = {
  title: string
  tasks: TaskProps[]
  truck2?: string
  removeTask: (taskId: string) => void
  changeFilter: (val: FilterValueType) => void
  addTask: (newTitle: string) => void
  changeIsDone: (taskId: string, isDone: boolean) => void
  changeShow: () => void
  isShow: boolean
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
                               changeIsDone,
                               changeShow,
                               isShow
}: TodoListItemProps) => {

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
  const [error, setError] = useState<string | null>('')
  const [filter, setFilter] = useState('All')

  const changeFilterHAndler = (val: FilterValueType) => {
    changeFilter(val)
    setFilter(val)
  }
  const addTaskHandler = () => {
    if (newTitle.trim()) {
      addTask(newTitle.trim())
      setNewTitle('')
    } else {
      setError('Title is required!')
    }
  }
  const oneKeyDawnHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        addTaskHandler()
      }
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
    setError(null)
  }
  const changeShowHandler = () => {
    changeShow()
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={newTitle}
          onKeyDown={oneKeyDawnHandler}
          onChange={onChangeHandler}
          className={error ? 'error' : ''}
        />
        <Button title={'+'} onClick={addTaskHandler}/>
        {error && <p className={'error-message'}>{error}</p>}
      </div>
      {tasks.length === 0 ? (
        <p>There are no tasks</p>
      ) : (
        <ul>
          {mappedTasks}
        </ul>
      )}
      <div>
        <Button
          className={filter === 'All' ? 'active-filter' : ''}
          title={'All'}
          onClick={() => changeFilterHAndler('All')}/>
        <Button
          className={filter === 'Active' ? 'active-filter' : ''}
          title={'Active'}
          onClick={() => changeFilterHAndler('Active')}/>
        <Button
          className={filter === 'Completed' ? 'active-filter' : ''}
          title={'Completed'}
          onClick={() => changeFilterHAndler('Completed')}/>
      </div>
      <div>
        <Button
          className={ isShow ? 'active-filter' : ''}
          title={'Show first three tasks'}
          onClick={changeShowHandler}/>
      </div>
    </div>
  )
}
