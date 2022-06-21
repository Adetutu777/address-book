<template>
<div class=" my-address">
<h3 class="mt-4">Address book</h3>
<div class="mt-4">
   <b-form-input placeholder="Name" 
   v-model= "name" />
   <b-form-input class="mt-4" type="number" placeholder="Phone number" 
   v-model= "number"/>
    <!-- <b-button @click="saveMessage" class="mt-3 address-btn" style="border:2px solid red" variant="none">Save</b-button> -->
    <button @click="saveMessage">Save</button>
  </div>

  <div class="contact-list mt-4">
  <h5>Contact List</h5>
  <ol>
<li v-for="results in result" :key="results">{{results.name}}-{{results.number}}</li>

  </ol>
  </div>
  </div>
</template>

<script>
import {  ref } from "@nuxtjs/composition-api";
export default {
  name: 'Address',
  setup(){
    const name = ref('')
    const number = ref('')
    const result = ref([])

    const saveMessage=()=>{
     const message = {
        name:name.value,
        number:number.value,
     }
     result.value.push(message) 
    }
    return{ name, number, saveMessage, result }
  }
}
</script>

<style scoped>
.my-address{
padding-left: 30rem;
}

.address-btn{
border: 1px solid green
}
</style>
