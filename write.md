### Introduction

Hello, have you been thinking of how and when to start using Nuxtjs to develop your vue applicatons, If yes, this article is for you, lets enjoy the ride together. In this article, we'll demonstrate how to get started with nuxtjs & talk about the basic things required of you to know. here is a list of what we will be coveing

        * [Chapter 1](Setting up Nuxt)
        * [Chapter 2](Nuxt Composition api)
        * [Chapter 3](Project phase)
        * [Chapter 4](Lazy loading component)
        * [Chapter 5](How to use VeeValidate with nuxtjs)
        * [Chapter 6](Conclusion)
        
### Chapter 1: Setting up Nuxt.js
Nuxtjs is an intuitive open source framework which comes with simplicity , thereby helping in reducing productivity time to get things done & delievering amazing and nice project at the end of the day. For more info on nuxtjs, check out....

For this article, we"ll be developing a simple address book & to get started, we start by installing nuxtjs, Also, we will be using Boostrapvue framework alongside. To install Nuxtjs, run the following command

yarn create nuxt-app (project-name), here is what it looks like on my cmd, 

After succefully installing all depedendecies, navigating into my vscode, here is what  a nuxtjs page looks

### Chapter 2: Composition api
Nuxt composition api can be use with Vue 3, It provides a way to use the Vue 3 Composition API with Nuxt-specific features
To use composition api, you run the following command on your vscode terminal 
yarn add @nuxtjs/composition-api. After installing composition api, you should also add this to your buildModules in your nuxtconfig.js file. You can check out here for reference (https://composition-api.nuxtjs.org/getting-started/setup/)
```html 
buildModules: [
    '@nuxtjs/composition-api/module'
  ]
```
Now that we have installed all we needed, lets get into usage of nuxtjs in our project, we will building a simple app, I call it an address book. To create a new route in Nuxtjs, all you need to do is to craete your file under the pages directory, so Nuxtjs has aleeady taken care of routing underneath, all you need do is just to create an the file you need . In our case, we will be creating three pages which are going to be called about, account & contact. For each of the pages, I've created an index.vue file where our code is going to be written. 

Also the component folder, I'll creating a sidebar and a navbar compnent which will be pointing to our pages directory. Starting with the sidebar, here is what it looks like. The template below has a div with class named sidebar, The div contain three NuxtLink, this is what is going to be used for the redirection to various route, the, the pages created above is what is been passed into the to prop. In addition, Nuxt comes with a styling class to active classe, in the code below i have a class (a.nuxt-link-exact-active) which i set background color & color styling to, this is going to be applied to any active pages we clicked on our sidebar therefore any 

```html
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
```

Now that we have created our sidebar, lets also create our navbar, the bavbar is going to be taken from bootstrap website, you can check into the boostrap website to choose yoir desired. The navbar code is illustrated below

```html
<template>
    <div>
        <div>
  <b-navbar toggleable="lg" class="ml-2 nav-text mt-2" type="light" >
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
      
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        

        <b-nav-item-dropdown right>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-text{
 background: #f5f5f5;
}
</style>

```
Lets take a look at what we have below, befre that, at the root folder of our pages, I have deleted the tutorial component & also deleted from the component folder. I have a lorem text ther currently, check below to see what we have.

The contact page is a page with an index.vue file and inside this file, I have component with name "Address.vue. "Address.vue" contins the code where we have two input fields & a save button where user can type in names and phone number & saving it. Here is the code and output below

###### contact page code
```html
<template>
    <div style="display:flex">
     <Address class="mx-4" />
    </div>
</template>

<script>
import Address from '../../components/Address.vue'
    export default {
        components:{Address}
    }
</script>

<style scoped>

</style>
```
In the template folder of our Address component, we have two input fields (the b-form-input are gotten from bootstrapvue website. here is link, https://bootstrap-vue.org/docs/components/form-input) with a save button & each of the form input have there respective v-model & in our script folder, we start by importing ref from Nuxtjs follow by the codes to solve the problem at hand. Check below for the code
###### Address component code


```html
<template>
<div class=" my-address" >
<h3 class="address-title mt-1">Address book</h3>
<div class="mt-4">
<form>
   <b-form-input 
   placeholder="Name"
   v-model= "name" />

   <b-form-input 
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

    return{ name, numbers, saveMessage, result, done }
  }
}
</script>

<style scoped>
.my-address{
width: 20rem;
}

.address-btn{
border: 1px solid green
}

.user-info{
  background: rgb(206, 210, 240);
  border-radius: 5px;
}
</style>

```
###### The output

#### Using VeeValidates In Nuxtjs
Lets talk about how to use VeeValidates to enforce user to input in the required before submitting our forms, To do this in Nuxtjs, we start by installing (yarn add vee-validate@3). After installing, you addd the following into your nuxtjs config files, here is link for reference (https://vee-validate.logaretm.com/v3/guide/rules.html#importing-rules-in-nuxt-js). 

```html
build: {
  transpile: [
    "vee-validate/dist/rules"
  ],
  /*
    ** You can extend webpack config here
    */
  extend(config, ctx) {
    // ...
  }
}
```

After installation we can the use of any of the available rules. For our usecase we will be using the required, alpha & numerice rule.
To get started, Two things are to be done. Firstly, we will create a folder called plugins, inside the folder, there is a file called (vee-validate.js). Inside the file is where you import the neccessary rules you want to use, check below to see code. 
Here
(vee-validate.js)
```html

import { extend, } from 'vee-validate';
import { required,  numeric, alpha } from 'vee-validate/dist/rules';



extend('required', {
  ...required,
  message: 'This field is required',
  
});

extend('numeric', {
  ...numeric,
  message: 'The  field may only contain numbers',
  
});
extend('alpha', {
  ...alpha,
  message: 'The  field may only contain alphabetic letters',
  
});

```

Secondly, you add the code below to your plugins in your nuxt config.js file
```html
plugins: [
    "~/plugins/vee-validate.js",
  ],
```

After doing this, you can now make use of the rules globally
For our first input field, we'll be using the required rule telling the user that its compulsory to fill there details & also the alpha rules telling te user only aplhabet characters can be typed in & for the second input field, we''ll be using the required rule along side the numeric rules telling the users it is important to fill there details and its only numbers that is allowed. 

Going back to our template, we first of all start by importing ( ValidationProvider, ValidationObserver } from 'vee-validate' followed by adding them to the compenent in the script folder & returning them in the setup. Having done this, next thing is to wrap the form element with ValiadationObserver. Each of the input fields is wrapped with validationProvider with the rules applied to each of them . After the form input is a div with span attribute, the span is the error msg to be displayed if the user didnt obey any of the validation rules. On each of the input fields , we have a (v-on:keyup="resetDone"), the resetDone function is to take off the error msg after submitting our forms. Also our button has a disabled prop with invalid passed to it. The invalid is coming from veevalidate as well. so this is going to disable the button making it unclickable until the user passs every of the validation rules. Code spinnet and output is shown below

```html
<template>
<div class=" my-address" >
<h3 class="address-title">Address book</h3>
<div class="mt-4">
  <ValidationObserver v-slot="{ invalid }">
<form>
<ValidationProvider rules="required|alpha" v-slot="{ errors }">
   <b-form-input  v-on:keyup="resetDone"
   placeholder="Name"
   v-model= "name" />
<div class="" style="position: relative; padding-bottom:0.1rem ">
                                <span v-if="!done" style="color:red; position: absolute; left:0;">{{ errors[0] }}</span> 
                                </div> 
           </ValidationProvider>

<ValidationProvider rules="required|numeric" v-slot="{ errors }">
   <b-form-input v-on:keyup="resetDone" 
   class="mt-4" 
   placeholder="Phone number" 
   v-model= "numbers"
    />
<div class="" style="position: relative; padding-bottom:0.1rem ">
                                <span v-if="!done" style="color:red; position: absolute; left:0;">{{ errors[0] }}</span> 
                                </div> 
           </ValidationProvider>

    <b-button @click="saveMessage" 
     :disabled="invalid"
    class="mt-4 address-btn" 
    variant="info" >
    Save
    </b-button>
    </form>
  </ValidationObserver>
  </div>

  <div class="contact-list mt-4">
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
import { ValidationProvider, ValidationObserver } from 'vee-validate';
export default {
  name: 'Address',
  components:{ValidationProvider, ValidationObserver},
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
  background: rgb(236, 238, 251);
  border-radius: 5px;
}
</style>

```
  #### Output

  The output below shows different error state as we passed into our code, also the button turns inactive cant be clicked until the validation passed.

  #### LazyLoading component
Lets talk about lazy loading. LazyLoading is a good way of reducing less api calls. Imagine having about 10 api calls to mount at the same time, this can really slow down your application, so you can just use lazy loading until when the page is been clicked on before making the api calls.  

In this tutorial, we'll be lazyloading the about page. In the index.vue of the about page , we have our AboutPage.vue component attached & inorder to lazyLoad this, all you need do is add Lazy infront of the AboutPage component. There is a v-if with name (show) attached to the component & also a functon (showData) attached to the button. In our script folder, our show is false by default and in the showData function, we turn it thue which means that its only when that button is been clicked that it should make the api calls. Code is attched below

#### about page index.vue
```html <template>
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
```
On the other hand, we have the (AboutVue.vue) component . Inside the componet is where we call our endpoint, this endpoint is gotten from (JSON Placeholder)(https://jsonplaceholder.typicode.com/). code is attached below
```html
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
    border: 0.7px solid rgb(90, 65, 62);
}
</style>
```
A snippet of our network tab before and after the api is called is displayed below
#### image
upon getting to the about page, our network tab only had 17 request meaning that it hasnt make the api call, remeber we have lazy load that its until when the button is been clicked before it makes the api call

#### image
Now that the button has been clicked, it then makes the api call, now showing 18 request. Lazy Loading is a great way to improving the performance of your code.

#### Image (Full output )
Here is the output of the about.vue page

Also we have the account page, Before i talk about the account page, lets talk about how to make our sidebar appears on every pages clicked on. To do this, we need to to create a folder names layouts(this is from nuxtjs). Inside our layout folder we create a file name (default.vue). Here is where we import our sidebar and navbar components, whatever is been called in the default page is definitely going to be applicable through out the application. There is a <Nuxt /> at the end of our mainnav div, this is what makes nuxtjs apply this to all of the pages. Code is shown below

#### layouts>>default.vue
```html
<template>
    <div class="wrapper" style="display: flex">
    <Sidebar />
    <div class="">
    <div class="nav-title">
    <MainNav />
    </div>
    <Nuxt />
    </div>
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
  ```
Now back to our account page. Account page isnt different from the rest of the page but in this page, we dont want either of the navbar or sidebar. There instance where you dont want a certain thing to be applicable to ebery pages, so thats what we want to achieve with this page. So to achieve this, we create a file under the layout directory, i call it (no-sidenav.vue). Inside the file, we have the follow code as shown below

```html
<template>
<div class=""> 
<Nuxt />
   </div>
</template>

<script>
export default {
  setup () {
  }
}
</script>

<style scoped>

html {
    font-family: "Aktiv Grotesk";
}

</style>

```
Taking a look at the above code, we dont have the sidebar and navbar attached, so now we can make use of it in the account page, all we need do is to add the (no-sidenav) to the layout in the script section. code is shown below.
#### account.vue
```html
<template>
    <div>
        <h2 class="text-center mt-4"> Account page</h2>
    </div>
</template>

<script>
    export default {
           layout: "no-sidenav", 
    }
</script>

<style scoped>

</style>
```
 
The output is shown below


### Conclusion: 
This tutorial has introduce us to how to start using nuxtjs to develop amazing vue projects. You can find the github link code below(https://github.com/Adetutu777/address-book). 

