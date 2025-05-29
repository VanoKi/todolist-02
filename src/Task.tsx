import {ChangeEvent} from "react";
import {EditableSpan} from "./components/EditableSpan.tsx";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import {getListItemSx} from "./Todolist.styles.ts";

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
      sx={getListItemSx(isDone)}
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

