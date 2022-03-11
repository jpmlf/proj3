<template>
<div id="app">
  <div id="menu">
      <nav class="navbar fixed-top navbar-expand navbar-transparent"> <router-link to="/"><a class="navbar-brand" href="#" style="color:green;">FAKE DOORS 2</a> </router-link><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item"> <a class="nav-link"><router-link to="/">HOME </router-link><span class="sr-only">(current)</span></a> </li>
                      <li class="nav-item"> <a class="nav-link" @click="increment"><router-link to="/color" >COLORS</router-link></a> </li>
                      <li class="nav-item"> <a class="nav-link"><router-link to="/browse">TYPES</router-link></a> </li>
                      <li class="nav-item"> <a class="nav-link"><router-link to="/about">ABOUT US</router-link></a> </li>
                  </ul>
              </div>
          </nav> <!-- ./ end of navbar -->
      <div id="side">
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/cart.png">
          <p>{{cartSize}} items</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>
<script>
export default {
  name: 'AppView',
  data() {
    return {}
  },
  computed: {
    cartSize() {
      return this.$root.$data.getCartSize();
    }
  },
  methods:{
    increment(){
      return this.$root.$data.incrementDebt();
    }
  }

}
</script>
<style>
* {
  box-sizing: border-box;
}
a:link, a:visited {
  color: white;
}
a:hover{
  color: green;
}
router-link{
  font-color: #fff;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
}

#menu a {
  background: linear-gradient(to bottom, transparent 0%, black 100%);;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

@import url('https://fonts.googleapis.com/css2?family=Allerta+Stencil&display=swap');

body {
    background: #000
}

header {
    background: #000;
    color: #fff
}

.left-side,
.right-side {
    height: fit-content
}

.navbar-transparent {
    background: transparent
}

.navbar-nav>li {
    color: #fff
}

.navbar-nav>li:hover {
    border-bottom: 1px solid #fff
}

.navbar-nav>.active {
    border-bottom: 1px solid #fff
}

.navbar-brand {
    font-family: 'Allerta Stencil', sans-serif;
    color: #83ff00
}

.navbar-brand:hover {
    color: #fff
}

.left-side img {
    padding-top: 100px
}

.shape {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #ce0000, #7A0800 70%);
    position: absolute;
    -webkit-clip-path: ellipse(500px 500px at 10% 5%)
}

.right-side {
    padding-top: 150px
}

.right-side h1 {
    font-family: 'Allerta Stencil', sans-serif;
    font-size: 2.4em;
    text-align: center
}

.right-side p {
    font-size: 1.5em;
    text-align: center;
    font-weight: bold
}

.btn.order-button {
    background: transparent;
    border: 2px solid #83ff00;
    color: #83ff00;
    border-radius: 30%;
    transition: 0.7s
}

.btn.order-button:hover {
    border: 2px solid #ce0000;
    color: #ce0000
}

.textBox{
    background: linear-gradient(#ce0000, #7A0800);
    display: block;
    padding-top: 60px;
    position: absolute;
}

.container{
    background: #000;
    color: #fff;
    overflow: auto;
    width: max-content;
    height: max-content;
}

.footer-dark {
    padding:50px 0;
    color:#f0f9ff;
    background-color:#282d32;
  }
  
  .footer-dark h3 {
    margin-top:0;
    margin-bottom:12px;
    font-weight:bold;
    font-size:16px;
  }
  
  .footer-dark ul {
    padding:0;
    list-style:none;
    line-height:1.6;
    font-size:14px;
    margin-bottom:0;
  }
  
  .footer-dark ul a {
    color:inherit;
    text-decoration:none;
    opacity:0.6;
  }
  
  .footer-dark ul a:hover {
    opacity:0.8;
  }
  
  @media (max-width:767px) {
    .footer-dark .item:not(.social) {
      text-align:center;
      padding-bottom:20px;
    }
  }
  
  .footer-dark .item.text {
    margin-bottom:36px;
  }
  
  @media (max-width:767px) {
    .footer-dark .item.text {
      margin-bottom:0;
    }
  }
  
  .footer-dark .item.text p {
    opacity:0.6;
    margin-bottom:0;
  }
  
  .footer-dark .item.social {
    text-align:center;
  }
  
  @media (max-width:991px) {
    .footer-dark .item.social {
      text-align:center;
      margin-top:20px;
    }
  }
  
  .footer-dark .item.social > a {
    font-size:20px;
    width:36px;
    height:36px;
    line-height:36px;
    display:inline-block;
    text-align:center;
    border-radius:50%;
    box-shadow:0 0 0 1px rgba(255,255,255,0.4);
    margin:0 8px;
    color:#fff;
    opacity:0.75;
  }
  
  .footer-dark .item.social > a:hover {
    opacity:0.9;
  }
  
  .footer-dark .copyright {
    text-align:center;
    padding-top:24px;
    opacity:0.3;
    font-size:13px;
    margin-bottom:0;
  }
  .portfolio {
    column-count: 4;
  column-gap: 2em;
  }
  
  .image img{
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  }

  .shape h2{
      padding-top: 90px;
      padding-left: 90px;
  }

  .heading{
    display: block;
    height: 33vh;
  }

  .heading h1{
    text-align: center;
    padding-top: 12vh;
    text-size-adjust: 120%;
  }

  @media (max-width:991px) {
    .heading{
      display: block;
      height: 12vh;
    }
  
    .heading h1{
      text-align: right;
      padding-top: 4vh;
      padding-right: 5vh;
      text-size-adjust: 120%;
    }
  }


</style>
