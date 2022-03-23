import React, { ChangeEvent, useState } from "react";

type RequestPropsType = {
    getCheckBoxValue: (success: boolean) => void
}


export const  Request = ({getCheckBoxValue, ...props}: RequestPropsType) => {

    const [checkboxValue, setCheckboxValue] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(e.currentTarget.checked)
        
    }
   
    const onClickHandler = () => {
        getCheckBoxValue(checkboxValue)
    }
    

    return (
        <div>
            <button onClick={onClickHandler}>Click</button>
            <input type="checkbox" onChange={onChangeHandler}/>
        </div>
    )
}