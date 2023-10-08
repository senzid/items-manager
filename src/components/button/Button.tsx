import './Button.scss'

interface ButtonProps extends 
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    buttonType?: string
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {children,className='primary'} = props
  
  return <button className={`base-button ${className}`} {...props}>{children}</button>
}