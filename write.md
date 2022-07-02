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
yarn add @nuxtjs/composition-api

Now that we have installed all we needed, lets get into usage of nuxtjs in our project, we will building a simple app, I call it an address book. To create a new route in Nuxtjs, all you need to do is to craete your file under the pages directory, so Nuxtjs has aleeady taken care of routing underneath, all you need do is just to create an the file you need . In our case, we will be creating three pages which are going to be called about, account & contact. For each of the pages, I've created an index.vue file where our code is going to be written. 

Also the component folder, I'll creating a sidebar and a navbar compnent which will be pointing to our pages directory. Starting with the sidebar, here is what it looks like. The template below has a div with class named sidebar, The div contain three NuxtLink, this is what is going to be used for the redirection to various route, the, the pages created aboe is what is been passed into the to prop

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

```, 
At the index.vue of our pages root folder(this is whats going to display upon loading the page), I have  

