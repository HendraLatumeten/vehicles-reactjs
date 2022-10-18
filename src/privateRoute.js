import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function PrivateRoute({component}) {
    const {isAuth } = useSelector((state) => state.users) 


    if (!isAuth) {
        return <Navigate to ="/login" replace={true}/>
    }
    return component

}

export default PrivateRoute