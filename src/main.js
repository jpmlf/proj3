import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

let data = {
  products: mock,
  cart: [],
  cartSize: 0,
  totalPrice: 0,
  debt: 10000,
  getCartSize() {
    return this.cartSize;
  },
  addItem(product) {
    // add to the cart array
    this.cart.push(product);
    this.cartSize += 1;
    this.totalPrice += parseInt(product.price.substring(1));
  },
  getItems(){
    return this.cart;
  },
  getProducts(){
    return this.products.filter(product => this.cart.indexOf(product) < 0);
  },
  removeItem(product){
    this.cartSize -= 1;
    const index = this.cart.indexOf(product);
    if (index > -1) {
      this.cart.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.totalPrice -= parseInt(product.price.substring(1));
  },
  getTot(){
    return this.totalPrice;
  },
  incrementDebt(){
    this.debt += 10000;
    return this.debt;
  },
  getDebt(){
    return this.debt;
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
