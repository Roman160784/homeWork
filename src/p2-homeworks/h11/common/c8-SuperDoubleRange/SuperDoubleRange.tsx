import React, { ChangeEvent } from 'react'
import Nouislider from 'nouislider-react'
import "nouislider/distribute/nouislider.css";


type SuperDoubleRangePropsType = {
    onChangeRange2?: (value: [number, number]) => void
    value: [number, number]
    min: number
    max: number
    step: number

    //  step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange2, value, min, max, step
        //    min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


   
    const onChangeCallBack = (value: string[]) => {
        onChangeRange2 && onChangeRange2([+value[0], +value[1]])
    }

    return (

        <Nouislider onChange={onChangeCallBack}
            step={step}
            range={{ min: min, max: max }}
            start={[value[0],  value[1]]}
            connect />

    )
}

export default SuperDoubleRange
