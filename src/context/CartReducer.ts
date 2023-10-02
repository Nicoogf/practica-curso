export const initialState  = {
    cartItem : []
}



export const cartReducer = ( state , action ) =>{
        switch ( action.type ){
            case "ADD_TO_CART" : {
             const { id } = action.payload

             //Validaion si esta en el carrito
             const existingItem = state.cartItem.find( (item) => item.id === id)
             if( existingItem ) {
                return {
                    ...state ,
                    cartItem : state.cartItem.map( (item) => item.id === id ? 
                    {...existingItem , quantity : existingItem.quantity + 1} : item)
                }
             }else{
                return {
                    ...state,
                    cartItem: { ...state.cartItems , action.payload }
                }
             }
        }
        case "REMOVE_FROM_CART" : {
            const { id: removeItemsID } = action.payload

            //vallidar si el item ya existe en el carrito
            const itemToRemove = state.cartItems.find( (item) => item.id === removeItemsID)

            if( itemToRemove.quantity === 1){
                return {
                    ...state, 
                    cartItems :state.cartItems.filter( (item) => item.id !== removeItemsID)
                }
            }else{
                return{
                    ...state ,
                    cartItems : state.cartItems.map( ( item )=> item.id === removeItemsID  ?  {...itemToRemove , quantity:itemToRemove.quantity -1} : item )
                }
            }       
        }
        default:
            return state ; 
    }
}