const InitialStateValue=[]

const userInfoReducer=(state=InitialStateValue,action)=>{
    switch(action.type){
        case "GET_USER" : {
            return  {...action.payload}
        }
        case "CLEAR" :{
            return InitialStateValue
        }
        default : {
            return [...state]
        }
        
    }
}

export default userInfoReducer