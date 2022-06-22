<template>
    <div>     
    <div class="head-text my-2 ml-1 px-2 py-2 ">
<h5 class="pt-2">AddressBook</h5>
</div>  
<div class="sidebar ml-1">

  <div class="text-white">
      <NuxtLink class="sidebar-list"  to="/contact">Contact</NuxtLink> <br>
      <NuxtLink class="sidebar-list" to="/account">Account</NuxtLink> <br>
      <NuxtLink class="sidebar-list" to="/about">About</NuxtLink> <br>
    
      
  </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


.sidebar {
  height:100vh;
  width: 12rem;
   padding: 2rem;
   line-height:2.2;
   font-size:18px;
  background: #f3e7e7;
}

.head-text{
   background: #f3e7e7;
}
.sidebar-list{
  color: black;
}

a.nuxt-link-exact-active {
  color: white;
  background:#243B41;
}


</style>