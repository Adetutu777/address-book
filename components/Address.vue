<template>
<div class=" my-address" style="width:20rem">
<h3 class="address-title">Address book</h3>
<div class="mt-4">
   <b-form-input  placeholder="Name"
   v-model= "name" />

   <b-form-input  class="mt-4" 
   type="number" placeholder="Phone number" 
   v-model= "number"
    />
    <b-button @click="saveMessage" class="mt-3 address-btn" variant="info">
    Save
    </b-button>
  </div>

  <div class="contact-list mt-4">
  <h5>Contact List</h5>
  <div class="d-flex justify-content-between user-info p-2 mt-1"  v-for="results in result" :key="results">
<div class="">{{results.name}}</div>
<div class="">{{results.number}}</div>
    <!-- <p class="p-2">---</p> -->
  </div>
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
     name.value='',
     number.value=''
    }
    return{ name, number, saveMessage, result }
  }
}
</script>

<style scoped>
my-address{
width: 20rem;
}

.address-title{
  margin-top: 6rem;
}

.address-btn{
border: 1px solid green
}

.user-info{
  background: rgb(236, 238, 251);
  border-radius: 5px;
}
</style>
