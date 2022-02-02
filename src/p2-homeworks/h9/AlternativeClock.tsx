import React, { useState } from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function AlternativeClock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date()) 
        }, 1000)
        setTimerId(id)
    }
  
    const onMouseEnter = () => {
        setShow(false)
    }

    const onMouseLeave = () => {
        setShow(true)
    }

    const stringTime = date?.toLocaleTimeString()  // fix with date
    const stringDate = date?.toLocaleDateString()  // fix with date

    return (
        <div> {show
           ? <div onMouseEnter={onMouseEnter}  >
                {stringTime}
            </div>
           : <div onMouseLeave={onMouseLeave}>  {stringDate} </div> }

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default AlternativeClock
