import {Button} from "./Button.tsx";
import {ChangeEvent, useState} from "react";

type Props = {
  placeholder: string
  value: string
  onKeyDown: () => void
  onChange: () => void
  title: string
  onClick: () => void
};
export const Input = (props: Props) => {
  const {placeholder, onChange, value, onKeyDown, title, onClick} = props

  const [error, setError] = useState<string | null>(null)

  const onBlur = () => {setError(null)}

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.currentTarget.value)
    setError(null)
  }

  console.log(`Input is render ${new Date().toLocaleTimeString()}`)
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        onBlur={onBlur}
        className={error ? 'error' : ''}
      />
      <Button
        title={title}
        onClick={onClick}
      />
      {error && <p className={'error-message'}>{error}</p>}
    </div>
  );
};