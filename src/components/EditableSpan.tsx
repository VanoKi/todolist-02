import {ChangeEvent, useState} from "react";

type Props = {
  title: string
  onClick: (title:string ) => void
};

export const EditableSpan = (props: Props) => {
  const {title, onClick} = props
  const [isEdit, setIsEdit] = useState(false)
  const [updatedValue, setUpdatedValue] = useState(title)
  const onEditHandler = () => {
    setIsEdit(!isEdit)
    if (isEdit) {
      onClick(updatedValue)
    }
  }
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUpdatedValue(event.currentTarget.value)
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