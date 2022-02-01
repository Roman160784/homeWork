import React, { useState } from 'react'
import { v1 } from 'uuid'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any /////////////////////////////////
    addUserCallback: (name: string) => void // need to fix any /////////////////////////////
}


// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({ users, addUserCallback, }) => { // деструктуризация пропсов
    const [name, setName] = useState<string>("") // need to fix any
    const [error, setError] = useState<string>("") // need to fix any



    const setNameCallback = (value: string) => { // need to fix any
        setError('')
        setName(value) // need to fix

    }
    const addUser = (name: string) => {
        if(name.trim() != ""){
            addUserCallback(name)
            setName('')
            alert(`${"Hello "}${name}${"!"}`) // need to fix ???????????????????
        }else {
            setError('Icorrect value') 
        }
    }

    const totalUsers = users.length// need to fix

    return (<>

        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
        {users.map(u => <div> {u.name}</div>)}
    </>
    )
}

export default GreetingContainer
