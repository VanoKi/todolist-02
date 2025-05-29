import {ChangeEvent} from "react";
import {EditableSpan} from "./components/EditableSpan.tsx";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';

type Props = {
  id: string
  title: string
  isDone: boolean
  removeTask: () => void
  changeIsDone: (todolistId: string, taskId: string, isDone: boolean) => void
  todolistId: string
  updatedTaskTitleHandler: (taskId: string, updatedTitle: string) => void
}

export const Task = ({id, title, isDone, removeTask, changeIsDone, todolistId, updatedTaskTitleHandler}: Props) => {

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeIsDone(todolistId, id, e.currentTarget.checked)
  }

  return (
    <ListItem
      // className={isDone ? 'is-done' : ''}
      sx={{p:0, justifyContent: 'space-between',
        opacity: isDone ? 0.5 : 1}}
    >
      <div>
        <Checkbox
          size={'small'}
          checked={isDone}
          onChange={onChangeHandler}/>
        <EditableSpan title={title} onClick={(title) => updatedTaskTitleHandler(id, title)}/>
      </div>
      <IconButton aria-label="delete"
                  onClick={removeTask}>
        <DeleteIcon fontSize="small"/>
      </IconButton>
    </ListItem>
  );
};

