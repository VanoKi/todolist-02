import {Button} from "./components/Button.tsx";
import {ChangeEvent} from "react";

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
  changeIsDone: (todolistId: string, taskId: string, isDone: boolean) => void
  todolistId: string
}

export const Task = ({id, title, isDone, removeTask, changeIsDone, todolistId}: Props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {changeIsDone(todolistId, id, e.currentTarget.checked)}

  return (
    <li className={isDone ? 'is-done' : ''}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChangeHandler}
      />
      <span>{title}</span>
      <Button title={'X'} onClick={removeTask}/>
    </li>
  );
};

