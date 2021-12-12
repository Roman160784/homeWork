import React from 'react'
import c from './Message.module.css'
import { messageData } from './HW1'

export type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}




function Message(props: PropsType) {
    return (
        <div className={c.message}>
            <div>
                <img className={c.ava} src={props.avatar} />
            </div>
            <div className={c.text}>
                <div> {props.message} <div />
                    <div>
                        {props.name}
                    </div>
                    <div className={c.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
