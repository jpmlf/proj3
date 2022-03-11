<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Factory 1')" href="#" class="pure-menu-link">Factory 1</a></li>
      <li class="pure-menu-item"><a @click="select('Factory B')" href="#" class="pure-menu-link">Factory B</a></li>
      <li class="pure-menu-item"><a @click="select('\'\'Factory\'\' 7')" href="#" class="pure-menu-link">"Factory" 7</a></li>
      <li class="pure-menu-item"><a @click="select('Brazil')" href="#" class="pure-menu-link">Brazil</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'BrowseView',
  components: {
    ProductList
  },
  data() {
    return {
      country: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.country === this.country);
    }
  },
  methods: {
    select(country) {
      this.country = country;
    }
  }
}
</script>