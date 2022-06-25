<template>
    <div>
    <button @click="showData">click</button>
    <div v-if="show">
    <!-- <div v-for="data in dataList" :key="data">
    {{data}} -->
      <LazyAboutPage  />
      </div>
    </div>
    <!-- </div> -->
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
    export default {
        setup(){
            const show =ref(false)
            const showData=()=>{
                show.value=true
            }

            // const dataList = new Array(200).fill('hello world')
            return { show, showData,}
        }
    }
</script>

<style scoped>

</style>