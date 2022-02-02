import React from 'react'
import AlternativeClock from './AlternativeClock'
import Clock from './Clock'

function HW9() {
    return (
        <div>
            <hr/>
            homeworks 9

            {/*should work (должно работать)*/}
            <Clock/>
            <hr />
            
            
            
            <hr/>
            <div>
            {/*для личного творчества, могу проверить НЕ НУЖНО УТОЧНИЛ ОДИН МОМЕНТ*/}
            <AlternativeClock/>
            </div>
            <hr/>
        </div>
    )
}

export default HW9
