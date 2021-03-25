// import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {startGetNotes} from "../Actions/userAuth"
import NotesForm from './NotesForm'
import NotesList from './NotesList'

const MyNotes=(props)=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetNotes())
    },[])

    return (
        <div>
            <h2>MY_Notes components </h2>
            <NotesList/>
            <NotesForm/>
        </div>
    )
}

export default MyNotes