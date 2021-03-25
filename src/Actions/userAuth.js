import axios from 'axios'
import swal from 'sweetalert'

export const startGetUsers=(formData,navigate)=>{
    return ((dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
        .then((resp)=>{
            const res=resp.data
            if(res.hasOwnProperty('errors')){
                alert(res.message)
            } else {
                alert('successfully created an account')
                dispatch(setUsers(res))
                navigate('/login')
            }
        })
        // .catch(err=>alert(err.message))
    })
}


export const setUsers=(data)=>{
    return {
        type : "POST_USER",
        payload : data
    }
}

export const startGetUserInfo=()=>{
    return ((dispatch)=>{
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
            headers : {
                "x-auth" : localStorage.getItem('token')
            }
        })
        .then((response) =>{
            const res=response.data
            console.log('res',res)
            dispatch(getUserInfo(res))
        })
        // .catch((err) =>{
        //     alert(err.message)
        // })
    })
}

export const getUserInfo=(data)=>{
    return {
        type : 'GET_USER',
        payload : data
    }
}

export const startClearStore=()=>{
    return (dispatch)=>{
        dispatch(clearStore())
    }
}

export const clearStore=()=>{
    return {
        type : "CLEAR"
    }
}

// Adding notes
export const startSetNotes = (formData)=>{
    return ((dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData,{
            headers : {
                "x-auth" : localStorage.getItem('token')
            }
        })
        .then((resp) =>{
            const res=resp.data
            console.log(res)
            if(Object.keys(res).includes('errors')){
                alert(res.message)
            }else{
                alert('successfully notes added')
                dispatch(setNotes(formData))
                
            }            
        })
        // .catch((err)=>{
        //     alert(err.message)
        // })
    })
}

export const setNotes=(data)=>{
    return {
        type : "POST_NOTES",
        payload : data
    }
}

//get notes
export const startGetNotes=()=>{
    return ((dispatch)=>{
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((resp)=>{
            const res=resp.data
            dispatch(getNotes(res))
        })
        // .catch(err=>alert(err.message))
    })
}

export const getNotes=(notes)=>{
    return {
        type : 'GET_NOTES',
        payload : notes
    }
}

// remove notes

export const startGetRemove =(id)=>{
    return (dispatch)=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers : {
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            swal(`${result.title} notes is successfully removed`)
            dispatch(remove(id))
        })
    }
}

export const remove=(id)=>{
    return {
        type : "REMOVE",
        payload : id
    }
}

// edit notes

export const startGetEdit=(id ,formData)=>{
    return (dispatch)=>{
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,formData,{
            headers : {
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            swal(`${result.title} notes is successfully updated`)
            //console.log('edit_data',result)
            dispatch(editNotes(result))
        })
    }
}

export const editNotes=(result)=>{
    return {
        type : "EDIT" ,
        payload : result
    }
}