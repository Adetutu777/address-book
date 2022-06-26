<template>
    <div>
<div class="row ml-1">
  <div class="col-md-6 mt-3" v-for="todos in todo" :key="todos.id">
    <div class="card todo-card mt-2 p-2">
       {{todos.username}}
    </div>
  </div>
</div>
    </div>
</template>

<script>
import axios from 'axios'
import {  ref, useFetch } from '@nuxtjs/composition-api';
    export default {
        setup(){
            const todo = ref('')
             useFetch(async () => {
      await axios.get('https://jsonplaceholder.typicode.com/users')
     .then( response => todo.value = response?.data)
      .catch(error => console.log(error))
    })

            return { todo}
        }
    }
</script>

<style scoped>
.todo-card{
    border: 0.7px solid salmon;
}
</style>