<template>
<div class=" my-address" >
<h3 class="address-title">Address book</h3>
<div class="mt-4">
<form>
   <b-form-input  v-on:keyup="resetDone"
   placeholder="Name"
   v-model= "name" />

   <b-form-input v-on:keyup="resetDone" 
   class="mt-4" 
   placeholder="Phone number" 
   v-model= "numbers"
    />

    <b-button @click="saveMessage" 
     :disabled="invalid"
    class="mt-3 address-btn" 
    variant="info" >
    Save
    </b-button>
    </form>
  </div>

  <div class="contact-list mt-5">
  <h5>Contact List</h5>
  <div class="d-flex justify-content-between user-info p-2 mt-1"  v-for="results in result" :key="results">
<div class="">{{results.name}}</div>
<div class="">{{results.numbers}}</div>
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
    const numbers = ref('')
    const result = ref([])
    const done = ref(false)

    const saveMessage=()=>{
     const message = {
        name:name.value,
        numbers:numbers.value,
     }
     result.value.push(message) 
     name.value='',
     numbers.value=''
     done.value = true
    }

    //  resetDone(){
    //   if(this.done == false) return 
    //   this.done=false
    // }
    const resetDone=()=>{
      if(done.value == false) return
    }
    return{ name, numbers, saveMessage, result, done, resetDone }
  }
}
</script>

<style scoped>
.my-address{
width: 20rem;
}

.address-title{
  margin-top: 1rem;
}

.address-btn{
border: 1px solid green
}

.user-info{
  background: rgb(206, 210, 240);
  border-radius: 5px;
}
</style>
