import {Button} from "./components/Button.tsx";
import {ChangeEvent} from "react";

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
  changeIsDone: (taskId: string, isDone: boolean) => void
}

export const Task = ({id, title, isDone, removeTask, changeIsDone}: Props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {changeIsDone(id, isDone)}

  return (
    <li>
      <input type="checkbox" checked={isDone} onChange={onChangeHandler}/>
      <span>{title}</span>
      <Button title={'X'} onClick={removeTask}/>
    </li>
  );
};

