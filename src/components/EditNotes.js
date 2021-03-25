import React from 'react'
import NotesForm from './NotesForm'
import {useDispatch} from 'react-redux'

export default function editNotes({id , title, body ,  handleToggle }){

    return (
        <div> 
            <h2> Edit Note </h2>
            <NotesForm id ={id} title ={title} body ={body} handleToggle = {handleToggle} />
        </div>
    )
}
