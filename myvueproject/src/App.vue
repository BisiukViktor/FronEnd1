<template lang="pug">
  div#app
   .flexbody
    AsideComponent(:curPic="cappPic")

    .panel
    HeaderComponent(v-on:picAppClick="picAppClick($event)")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import AsideComponent from './components/AsideComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import router from './router/index';

  @Component({
    components: {
      AsideComponent,
      HeaderComponent,
    },
  })
export default class App extends Vue {
      cappPic:number=3;

      picAppClick(currentPic:number):void{
        this.cappPic = currentPic;
      }
  }

</script>

<style>

  #app {}

  html
  {
    background-color: #FFFFFF;
    height: 100%;
    width: 100%;
    font-family: Helvetica;

  }

  *{
    margin: 0px;
    padding: 0px;
  }

  @media (min-width: 1001px) {
    /*---------------For widescreen desktop-------------------------*/
    .flexbody {
      display: flex;
      background-color: #FFFFFF;
      height: 100vh;
      width: 100vw;
      font-family: Helvetica;

    }

    .panel { /*Центральная панель: хедер и текстовый блок в центре*/
      flex-direction: column;
    }

  }

  /* -------------------- Mobile ---------------------*/

  @media (max-width: 1000px)
  {
    .flexbody {
      background-color: #FFFFFF;
      height: 100vh;
      width: 100vw;
      font-family: Helvetica;

    }


    .panel { /*Центральная панель: хедер и текстовый блок в центре*/
      flex-direction: column;
    }

  }


</style>
