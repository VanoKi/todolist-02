type Props = {
  title: string
  onClick?: () => void
  className?: string
}

export const Button = (props: Props) => {
  const { title, onClick, className } = props
  const onClickHandler = () => {
    onClick()
  }
  return <button
    className={className}
    onClick={onClickHandler}>
    {title}
  </button>
}
