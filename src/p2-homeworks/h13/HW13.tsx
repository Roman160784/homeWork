import React from "react";
import { useDispatch } from "react-redux";
import {Request} from './Request'
 
export const HW13 = () => {

    const dispatch = useDispatch


    const getCheckBoxValue = (success: boolean) => {
        dispatch
    }

    return (
        <div>
        <Request getCheckBoxValue={getCheckBoxValue}/>
        </div>
    )

}