 
 
 
 const INIT_STATE = {
    carts :[],
    AddTocart:1
 };

 export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
            case "increment":
                return{
                    ...state,
                    AddTocart:action.payload,

                }
            default :
            return state
    }
 }