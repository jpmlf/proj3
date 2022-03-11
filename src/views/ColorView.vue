<template>
  <div class="about">
    <h1 style="color:white">You now owe the IRS €{{debt}}!! </h1>
    <br>
    <p style="color:white">Sucks to be you :} </p>
  </div>
</template>
<script>
export default {
  name: 'AppView',
  data() {
    return {}
  },
  computed: {
    debt() {
      return this.$root.$data.getDebt();
    }
  }
}
</script>