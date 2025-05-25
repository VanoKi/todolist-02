// @flow
import * as React from 'react';
import {Button} from "./Button.tsx";

type Props = {
  placeholder: string
  value: string
  onKeyDown: () => void
  onChange: () => void
  className: string
  title: string
  onClick: () => void
};
export const Input = (props: Props) => {
  const {placeholder, className, onChange, value, onKeyDown} = props
  return (
    <div>
      <input
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={className}
      />
      <Button
        title={'+'}
        onClick={onClick}
      />
    </div>
  );
};