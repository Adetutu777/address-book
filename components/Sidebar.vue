<template>
    <div>       
<div class="sidebar" id="sidebars">
  <div class="links">
      <NuxtLink to="/contact">Contact</NuxtLink> <br>
      <NuxtLink to="/services">Services</NuxtLink> <br>
      
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
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  background: rgb(158, 158, 236);
}


.sidebar ul li.active {
  background:pink;
  border-bottom-left-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}



</style>