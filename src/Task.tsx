import {Button} from "./components/Button.tsx";

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
}

export const Task = ({id, title, isDone, removeTask}: Props) => {
  console.log('Current task:', id)
  return (
    <li>
      <input type="checkbox" checked={isDone}/>
      {/*<span>{id}</span>*/}
      <span>{title}</span>
      <Button title={'X'} callBack={removeTask}/>
    </li>
  );
};

