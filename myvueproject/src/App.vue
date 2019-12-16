<template lang="pug">
  div#app
   .flexbody
    asideComponent(:currentPic="cPic")

    .panel

      headerComponent(@tabClick="tabClick($event)")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import asideComponent from './components/asideComponent.vue';
import headerComponent from './components/headerComponent.vue';

  @Component({
    components: {
      asideComponent,
      headerComponent,
    },
  })
export default class App extends Vue {
      cTab:String='tasks';

      cPic:Number=3;

      tabClick(currentTab):void{
        this.cTab = currentTab;
      }

      picClick(currentPic) :void{
        this.cPic = currentPic;
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
