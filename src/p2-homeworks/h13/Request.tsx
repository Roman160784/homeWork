import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";

type RequestPropsType = {
    getCheckBoxValue: (success: boolean) => void
}


export const  Request = ({getCheckBoxValue, ...props}: RequestPropsType) => {

    const message = useSelector<AppStoreType, string | null >(state => state.request.success)
    
    
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
            {message !== null ? <span>{message}</span> : null}
        </div>
    )
}