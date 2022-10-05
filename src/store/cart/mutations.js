export default {
    addToCart(state, payload){
        const itemIndex = state.cartStore.findIndex((item) => item.id === payload.id);

      if (itemIndex !== -1) {
        state.quantity += 1;
      } else {
        const tempProduct = {
          quantity: 1,
          cartStore: {... payload}

        };
        state.cartStore.push(tempProduct);
      }
    }
}