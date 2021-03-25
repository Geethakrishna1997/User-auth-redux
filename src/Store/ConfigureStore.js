import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userAuthReducer from '../Reducers/userAuthReducer'
import userInfoReducer from '../Reducers/userInfoReducer'
import userNotesReducer from '../Reducers/userNotesReducer'

const ConfigureStore=()=>{
    const store = createStore(combineReducers({
        users : userAuthReducer,
        userInfo : userInfoReducer,
        userNotes : userNotesReducer
   }),applyMiddleware(thunk))
    return store
}

export default ConfigureStore