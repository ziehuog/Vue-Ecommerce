export default {
    addToCart(state, payload){
        const itemIndex = state.cartStore.findIndex((item) => item.id === action.payload.id);

      if (itemIndex !== -1) {
        state.cartStore[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: 1
        };
        state.cartStore.push(tempProduct);
      }
    }
}