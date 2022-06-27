<template>
    <div class="wrapper" style="display: flex">
    <Sidebar />
    <div class="">
    <div class="nav-title">
    <MainNav />
    </div>
    <Nuxt />
    </div>
      <!-- <MainNav style="flex:8;"> -->
    <!-- <Nuxt /> -->
      <!-- </MainNav> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.wrapper{
    background: #e5e5e5;
}

.nav-title{
width: calc(100vw - 14rem);
}
</style>