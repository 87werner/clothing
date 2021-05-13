//each reducer recieves two properties states object and an action, action = object with type: 
//payload : object, flexible property on the action type.  
//redux store pass the state when am action fires

const INITIAL_STATE = {
    currentUser : null
}
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
                return{
                    ...state,
                    currentUser: action.payload
                }
        default:
            return state;
    }
}

export default userReducer;