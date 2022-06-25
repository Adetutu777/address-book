<template>
    <div>
        <div v-for="todos in todo" :key="todos.id">
    {{todos.title}}
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
      await axios.get('https://jsonplaceholder.typicode.com/todos')
     .then( response => todo.value = response?.data)
      .catch(error => console.log(error))
    })

            return { todo}
        }
    }
</script>

<style lang="scss" scoped>

</style>