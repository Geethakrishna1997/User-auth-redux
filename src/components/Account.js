// import axios from 'axios'
import React,{ useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startGetUserInfo } from '../Actions/userAuth'

export default function Account(){
    const dispatch=useDispatch()

    const userInfo = useSelector((state)=>{
        return state.userInfo
        // return state.userInfo.map(ele=>ele)
    })

    useEffect(() =>{
        dispatch(startGetUserInfo())
    
    },[])

    return (
        
                    <div key = {userInfo._id}>
                        <h4>User Name :{userInfo.username}</h4>
                        <h4>User email :{userInfo.email}</h4>
                    </div>
               
           
    )
}
