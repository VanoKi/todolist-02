import {Button} from "./components/Button.tsx";

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
  changeIsDone: (taskId) => void
}

export const Task = ({title, isDone, removeTask, changeIsDone}: Props) => {
  return (
    <li>
      <input type="checkbox" checked={isDone} onClick={changeIsDone}/>
      <span>{title}</span>
      <Button title={'X'} onClick={removeTask}/>
    </li>
  );
};

