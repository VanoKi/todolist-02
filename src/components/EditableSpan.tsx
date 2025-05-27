import {ChangeEvent, useState} from "react";

type Props = {
  title: string
  // updateTaskTitle: (todolistId:string, taskId: string, updatedTitle: string) => void
  onClick: (title:string ) => void
};

export const EditableSpan = (props: Props) => {
  const {title} = props
  const [isEdit, setIsEdit] = useState(false)
  const [updatedValue, setUpdatedValue] = useState(title)
  const onEditHandler = () => {
    setIsEdit(!isEdit)
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue(event.currentTarget.value)
    // setError(null)
  }

  return (
    isEdit ?
      <input
        value={updatedValue}
        onBlur={onEditHandler}
        autoFocus
        onChange={onChangeHandler}
      />
      : <span onDoubleClick={onEditHandler}>{updatedValue}</span>
  );
};