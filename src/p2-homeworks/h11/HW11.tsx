import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<[number, number]>([0, 100])

    const onChangeRange = (value: number) => {
        setValue1(value)
    }

    const onChangeRange2 = (value: [number, number]) => {
        setValue2(value)
        
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange onChangeRange={onChangeRange} // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value2[0]}</span>
                <SuperDoubleRange onChangeRange2={onChangeRange2}
                    value={value2}
                    step={1}
                    min={0}
                    max={100}   // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2[1]}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
