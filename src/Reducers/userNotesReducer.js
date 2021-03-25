const startInitialValue = []

const userNotesReducer = (state=startInitialValue,action)=>{
    switch(action.type){
        case "POST_NOTES" : {
            return [...state, {...action.payload}]
        }
        case "GET_NOTES" : {
            return [...action.payload]
        }
        case "REMOVE" : {
            return state.filter(ele=>ele._id !== action.payload)
        }
        case "EDIT" : {
            return state.map(ele =>{
                if(ele._id === action.payload._id){
                    return {...ele , ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default userNotesReducer