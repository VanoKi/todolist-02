import {Button} from "./Button.tsx";

type Props = {
  placeholder: string
  value: string
  onKeyDown: () => void
  onChange: () => void
  className: string
  title: string
  onClick: () => void
  onBlur: () => void
};
export const Input = (props: Props) => {
  const {placeholder, className, onChange, value, onKeyDown, title, onClick, onBlur} = props
  console.log(`Input is render ${new Date().toLocaleTimeString()}`)
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={className}
        onBlur={onBlur}
      />
      <Button
        title={title}
        onClick={onClick}
      />
    </div>
  );
};