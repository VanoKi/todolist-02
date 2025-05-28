import {ChangeEvent, KeyboardEvent, useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type Props = {
  placeholder: string
  buttonTitle: string
  onSubmit: (value: string) => void
};
export const Input = (props: Props) => {
  const {placeholder, onSubmit} = props

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

  const buttonStyle = {maxWidth: '38px', maxHeight: '38px', minWidth: '38px', minHeight: '38px'}

  console.log(`Input is render ${new Date().toLocaleTimeString()}`)
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={placeholder}
        variant="outlined"
        size={'small'}

        // placeholder={placeholder}
        value={value}
        onKeyDown={oneKeyDawnHandler}
        onChange={onChangeHandler}
        onBlur={() => setError(null)}
        className={error ? 'error' : ''}
      />
      {/*<input
        placeholder={placeholder}
        value={value}
        onKeyDown={oneKeyDawnHandler}
        onChange={onChangeHandler}
        onBlur={() => setError(null)}
        className={error ? 'error' : ''}
      />*/}
      <Button
        variant="contained"
        onClick={addTaskHandler}
        style={buttonStyle}>
        +
      </Button>
      {error && <p className={'error-message'}>{error}</p>}
    </div>
  );
};