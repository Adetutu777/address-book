<template>
    <div>     
    <div class="head-text my-2 ml-1 px-2 py-2 ">
<h5 class="pt-2">AddressBook</h5>
</div>  
<div class="sidebar ml-1 text-light">
      <NuxtLink class="sidebar-list"  to="/contact">Contact</NuxtLink> <br>
      <NuxtLink class="sidebar-list" to="/account">Account</NuxtLink> <br>
      <NuxtLink class="sidebar-list" to="/about">About</NuxtLink> <br>
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
   padding: 0.2rem;
   line-height:2.2;
   font-size:18px;
  background: #f5f5f5;
}

.head-text{
   background: #f5f5f5;
}
.sidebar-list{
  color: black;
  padding: 0.1rem;
  border-radius: 5px;
  padding-left: 0.5rem;
text-decoration: none;
}

a.nuxt-link-exact-active {
  color: white;
  background:#243B41;
  display: inline-block;
   width: 100%;
}


</style>