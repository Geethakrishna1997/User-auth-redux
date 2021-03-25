const initialStateValue = []

const userAuthReducer = (state=initialStateValue,action)=>{
    switch(action.type) {
        case "POST_USER" : {
            return [...state, {...action.payload}]
        }
        default : {
            return [...state]
        }
    }
}
export default userAuthReducer