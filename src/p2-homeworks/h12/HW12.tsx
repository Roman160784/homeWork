import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeAC, initStateColorType } from "./bll/themeReducer";
import s from "./HW12.module.css";



function HW12() {
    const theme = useSelector<AppStoreType, initStateColorType>(state => state.theme)
    const dispatch = useDispatch()

    const themes = ['dark', 'red', 'some'];

    const onChangeCallback = (color: string) => {
        dispatch(changeThemeAC(color))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme.color]}>
            <hr/>
            <span className={s[theme.color + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
             options={themes}
             onChangeOption={onChangeCallback}/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
