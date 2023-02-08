const { defineStore } = Pinia;

export default defineStore("cart", {
  // data, methods, computed
  // state, actions, getters
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      console.log(productId, qty);
      this.cart.push({
        id: new Date().getTime(),
        productId,
        qty,
      });
      console.log(this.cart);
    },
    getters: {
      cartList: () => {
        return {
          total: 10000,
          carts: [], //列表
        };
      },
    },
  },
});
