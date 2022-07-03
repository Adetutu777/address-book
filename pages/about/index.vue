<template>
    <div>
    <div class="ml-3 mt-4">
    <h5>Hello World</h5>
    <b-button @click="showData" 
    class="mt-2" 
    variant="info" >
    Click Me
    </b-button>
    </div>

    <div v-if="show">
      <LazyAboutPage  />
      </div>
    </div>
</template>

<script>
import { ref, } from '@vue/composition-api'
    export default {
      
        setup(){
            const show =ref(false)
            const showData=()=>{
                show.value=true
            }
            return { show, showData,}
        }
    }
</script>

<style scoped>

</style>