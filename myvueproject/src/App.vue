<template lang="pug">
  div#app
    <body class="flexbody">

    Aside_Component(:currentPic="cPic")

    div.panel
      Header_Component(@tabClick="tabClick($event)")
      Center_Component(:currentTab="cTab" v-on:picClick="picClick($event)")

    </body>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import aside_Component from './components/AsideComponent.vue';
import header_Component from './components/Header_Component.vue';
import center_Component from './components/Centerblock_Component.vue';

  @Component({
    components: {
      aside_Component,
      header_Component,
      center_Component
    },
  })
  export default class App extends Vue {

      cTab:String='tasks';
      cPic:String='3';

    tabClick(currentTab){
      this.cTab=currentTab;
    };
    picClick(currentPic){
      this.cPic=currentPic;
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



  /* ------------------------------------------ Mobile ----------------------------------------------*/

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
