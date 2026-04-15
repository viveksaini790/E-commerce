const INIT_STATE = {
  cart: []
}

export const cartreducer = (state = INIT_STATE, action) => {

  switch (action.type) {

    case "UPDATE_CART":

      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      )

      // agar item mil gaya
      if (itemIndex >= 0) {

        const updatedCart = state.cart.map(item => {

          if (item.id === action.payload.id) {

            if (action.payload.type === "INC") {
              return { ...item, quantity: item.quantity + 1 }
            }

            if (action.payload.type === "DEC" && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 }
            }

          }

          return item
        })

        return {
          ...state,
          cart: updatedCart
        }

      } 
      
      // agar item nahi mila (new item)
      else {
        let value=1;
        if(action.payload.type === "INC"){
            value=2
        }else{
            value=1;
        }

        return {
          ...state,
          cart: [...state.cart, { id: action.payload.id, quantity: value }]
        }

      }

    default:
      return state
  }

}