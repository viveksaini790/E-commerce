
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
export const incCartdata = (data) => {
  return {
    type: "UPDATE_CART",
    payload: data
  }
}

export const decCartdata = (id) => {
  return {
    type: "decrement",
    payload: id
  }
}