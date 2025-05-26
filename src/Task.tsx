import {Button} from "./components/Button.tsx";
import {ChangeEvent, useState} from "react";
import {EditableSpan} from "./components/EditableSpan.tsx";

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
  changeIsDone: (todolistId: string, taskId: string, isDone: boolean) => void
  todolistId: string
  updateTaskTitle: (todolistId:string, taskId: string, updatedTitle: string) => void
}

export const Task = ({id, title, isDone, removeTask, changeIsDone, todolistId, updateTaskTitle}: Props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {changeIsDone(todolistId, id, e.currentTarget.checked)}
  
  // const updateTaskHandler = () => {
  //   updateTaskTitle(todolistId, )
  // }

  return (
    <li className={isDone ? 'is-done' : ''}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChangeHandler}
      />
      <EditableSpan title={title}/>
      <Button title={'X'} onClick={removeTask}/>
    </li>
  );
};

