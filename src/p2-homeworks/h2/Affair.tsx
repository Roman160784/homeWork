import React from 'react'
import {AffairType} from './HW2'
import a from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
<div className={a.affairContainer}>
                <div className={a.affairName}> {props.affair.name} </div>
                <div className={a.affairPriority}>{props.affair.priority}</div>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair




                {/* <div>{props.affair.name}</div>
            <div >{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button> */}