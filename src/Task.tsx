import {Button} from "./components/Button.tsx";

type Props = {
  title: string
  isDone: boolean
  removeTask: () => void
}

export const Task = ({title, isDone, removeTask}: Props) => {
  return (
    <li>
      <input type="checkbox" checked={isDone}/>
      <span>{title}</span>
      <Button title={'X'} callBack={removeTask}/>
    </li>
  );
};

