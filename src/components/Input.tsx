// import {Button} from "./Button.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";
// import {Button} from "@mui/material";
import Button from '@mui/material/Button';

type Props = {
  placeholder: string
  buttonTitle: string
  onSubmit: (value: string) => void
};
export const Input = (props: Props) => {
  const {placeholder, buttonTitle, onSubmit} = props

  const [error, setError] = useState<string | null>(null)
  const [value, setValue] = useState('')

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
    setError(null)
  }

  const oneKeyDawnHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTaskHandler()
    }
  }
  const addTaskHandler = () => {
    if (value.trim()) {
      onSubmit(value.trim())
      setValue('')
    } else {
      setError('Title is required!')
    }
  }

  console.log(`Input is render ${new Date().toLocaleTimeString()}`)
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onKeyDown={oneKeyDawnHandler}
        onChange={onChangeHandler}
        onBlur={() => setError(null)}
        className={error ? 'error' : ''}
      />
      {/*<Button*/}
      {/*  title={buttonTitle}*/}
      {/*  onClick={addTaskHandler}*/}
      {/*/>*/}
      <Button variant="contained" onClick={addTaskHandler}>+</Button>
      {error && <p className={'error-message'}>{error}</p>}
    </div>
  );
};