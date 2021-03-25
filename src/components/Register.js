import React, { useState } from 'react'
import validator from 'validator'
// import { Formik, useFormik } from 'formik'
// import * as Yup from 'yup'
// import axios from 'axios'
import { useDispatch } from 'react-redux'
import { startGetUsers } from '../Actions/userAuth'  

export default function Register(props){
    const dispatch = useDispatch()

    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [formError , setFormError] = useState({})
    const error  = {}

    const runValidation =()=>{
        // for name
        if(userName.trim().length === 0){
            error.userName = "name cannot be blank"
        }
        // for email
        if(email.trim().length === 0){
            error.email = "email cannot be blank "
        } else if( !(validator.isEmail(email))){
            error.email = "invalid email format"
        }

        // for password
        if(password.trim().length === 0){
            error.password = "password cannot be blank"
        }
    }

    const handleChange=(e)=>{
        if(e.target.name === 'username'){
            setUserName(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()

        // form validation
        runValidation()

        if(Object.keys(error).length ===0 ){
            setFormError({})
            const formData={
                username : userName,
                email : email,
                password : password
            }
    
            dispatch(startGetUsers(formData ,props.history.push ))
            //props.history.push('/login')

            // reset form 
            
            setUserName('')
            setEmail('')
            setPassword('')

        } else{
            setFormError(error)
        }       
    }   

    return  (
        <div>
            <h2>Register with us</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="enter username"
                    value={userName}
                    onChange={handleChange}
                    name="username"
                />
                {formError.userName  && <span>{formError.userName}</span>}
                <br/>

                <input 
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={handleChange}
                    name="email"
                />
                {formError.email && <span>{formError.email}</span>}
                <br/>        

                <input 
                    type="text"
                    placeholder="enter password"
                    value={password}
                    onChange={handleChange}
                    name="password"
                />
                {formError.password && <span>{formError.password}</span>}
                <br/>
                <input type="submit" value="save" />
            </form>
            
      </div>
    )   
}
/*
const formik = useFormik({
        initialvalues: {
            user_name : '',
            email : '',
            password : '',
            confirm_password : ''
        },
        validationSchema : Yup.object({
            user_name : Yup.string().min(2,'Minimum 2 characters').max(15,'Maximum 15 characters').required('Required!'),
            email : Yup.string().email('Invalid email format').required('Required!'),
            password : Yup.string().min(8,'Minimum 8 characters').required('Required!'),
            confirm_password : Yup.string().oneOf([Yup.ref('password')],'Passwords didnot match').required('Required!')
        }),
        onSubmit: values =>{
            alert(JSON.stringify(values,null,2))
        }
    })

    return (
        <div>
            <h1>Register with Us</h1>

            <form onSubmit={formik.handleSubmit}>

                <label>UserName</label>
                <input 
                    type='text'
                    name='user_name'
                    value={formik.values.user_name}
                    onChange={formik.handleChange}
                />
                {formik.errors.user_name && formik.touched.user_name && (<p>{formik.errors.user_name}</p>)}

                <label>Email</label>
                <input 
                    type='email'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (<p>{formik.errors.email}</p>)}

                <label>Password</label>
                <input 
                    type='text'
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password && (<p>{formik.errors.password}</p>)}

                <label>Confirm Password</label>
                <input 
                    type='password'
                    name='password'
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                />
                {formik.errors.confirm_password && formik.touched.confirm_password &&(<p>{formik.errors.confirm_password}</p>)}

                <button type='submit'>Submit</button>

            </form>
    </div>
    )
*/