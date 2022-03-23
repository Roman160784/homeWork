import React from "react";
import { useDispatch } from "react-redux";
import { setCheckBoxValueTC } from "./api/redux/requestReducer";
import {Request} from './Request'
 
export const HW13 = () => {

    const dispatch = useDispatch()


    const getCheckBoxValue = (success: boolean) => {
       dispatch(setCheckBoxValueTC(success))
    }

    return (
        <div>
        <Request getCheckBoxValue={getCheckBoxValue}/>
        </div>
    )

}