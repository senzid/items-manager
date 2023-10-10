import { ReactNode } from 'react'
import './Input.scss'
import { FaSortDown, FaSortUp } from "react-icons/fa6";

interface InputProps {
  children?: ReactNode,
  placeholder: string,
  sorted?: 'up' | 'down' | undefined,
  handleSort: (title:string) => void,
  handleFilter:(type:string,filter:string)=>void,
}

export const Input: React.FC<InputProps> = (props) => {
  const {placeholder,handleSort,handleFilter} = props
  const handleUserSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    handleFilter(placeholder,e.target.value)
  }

  return (
    <div className='input-container'>
      <input className='input-text' placeholder={placeholder} onChange={(event)=>handleUserSearch(event)}/>
      <button onClick={()=>handleSort(placeholder)} className='input-icon-container'>
        <FaSortUp className="input-icon" />
        <FaSortDown className="input-icon" />
      </button>
    </div>
  )
}