import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { startGetEdit, startSetNotes } from '../Actions/userAuth'

const NotesForm=({id,title:name,body:text,handleToggle})=>{
    const dispatch = useDispatch()

    const [title,setTitle] = useState(name ? name : '')
    const [body,setBody] = useState(text ? text : '')

    const handleChange=(e)=>{
        if(e.target.name === 'title'){
            setTitle(e.target.value)
        }else if(e.target.name === 'body'){
            setBody(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title : title,
            body : body
        }
        if(handleToggle){
            dispatch(startGetEdit(id,formData))
        }
        console.log(formData)
        dispatch(startSetNotes(formData))
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <h2>Add Note</h2>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text"  
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                    name="title"
                /><br/>

                <textarea 
                    placeholder="Body"
                    value={body}
                    onChange={handleChange}
                    name="body"
                ></textarea><br/>

                <input 
                    type="submit"
                    value="save"
                />
            </form>

        </div>
    )
}

export default NotesForm