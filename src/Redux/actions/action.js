
export const Add = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

export const remove=(item)=>{
    return{
        type:"remove",
        payload:item
    }
}

export const incCartdata=(item)=>{
    return{
        type:"increment",
        payload:item
    }
}