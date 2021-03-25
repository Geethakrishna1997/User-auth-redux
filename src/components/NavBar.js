import React from 'react'
import { Link,Route, withRouter } from 'react-router-dom'
import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import MyNotes from './MyNotes'
import {useDispatch} from "react-redux"
import {startClearStore} from '../Actions/userAuth'


const NavBar=(props)=>{
    const { userLoggedIn,handleAuth,history } = props

    const dispatch=useDispatch() 

    return (
        <div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            {!userLoggedIn ? (
                <div>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </div>
            ) : (
                <div>
                    <li><Link to='/account'>Account</Link></li>
                    <li><Link to="/mynotes">My Notes</Link></li>
                    <li><Link onClick={()=>{
                            dispatch(startClearStore())
                            localStorage.removeItem('token')
                            alert('successfully Logged out')
                            handleAuth()
                            history.push('/')
                        }}>Logout</Link></li>
                </div>
            )}
            
        </ul>

        <Route path='/' component={Home} exact={true} />
        <Route path='/register' component={Register} />
        <Route path='/login' render={(props)=>{
            return <Login 
                {...props} 
                handleAuth={handleAuth} 
            />
        }} />
        <Route path="/account" component={Account} />
        <Route path="/mynotes" component={MyNotes} />

        </div>
    )
}

export default withRouter(NavBar)