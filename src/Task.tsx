import {Button} from "./components/Button.tsx";

type Props = {
  title: string
  isDone: boolean
}

export const Task = ({title, isDone}: Props) => {
  return (
    <li>
      <input type="checkbox" checked={isDone}/>
      <span>{title}</span>
      <Button title={'X'}/>
    </li>
  );
};

