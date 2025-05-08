import {Button} from "./components/Button.tsx";

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
}

export const Task = ({title, isDone, removeTask}: Props) => {
  return (
    <li>
      <input type="checkbox" checked={isDone}/>
      <span>{title}</span>
      <Button title={'X'} onClick={removeTask}/>
      {/*<button onClick={removeTask}>X</button>*/}
    </li>
  );
};

