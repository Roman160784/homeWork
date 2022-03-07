import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { initStateType, loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import { Preloader } from './preloader';

function HW10() {

    let isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 1500);
    };

    return (
        <div>
            <hr />
            homeworks 10
            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <Preloader />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
