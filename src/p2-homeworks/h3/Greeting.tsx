import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'
import { UserType } from './HW3'

type GreetingPropsType = {
    name: string// need to fix any ////////////////////
    setNameCallback: (name: string) => void// need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any !!!!!!!!!!!!!!??????????
    totalUsers: number // need to fix any

}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
    const inputClass = s.error? error : "" // need to fix with (?:) I fixed it BAD

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameCallback(e.currentTarget.value)
    }

    return (
        <div>
            <input value={name} onChange={inputChange} className={inputClass} />
            <span>{error}</span>
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
