<template>
<div>
  <CartList :products="products" />
  <button class="auto"><a href="https://www.youtube.com/watch?v=iik25wqIuFo"> BUY NOW!!! ${{total}} </a></button>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'BrowseView',
  components: {
    CartList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.getItems();
    },
    total(){
      return this.$root.$data.getTot();
    }
  }
}
</script>
<style scoped>
button {
  height: 50px;
  background: green;
  color: black;
  border: green;
}
a{
  color: black;
}
</style>