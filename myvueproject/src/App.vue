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

  import Aside_Component from './components/AsideComponent.vue'
  import Header_Component from './components/Header_Component.vue'
  import Center_Component from './components/Centerblock_Component.vue'

  export default {
    components:{
      Aside_Component,
      Header_Component,
      Center_Component
    },

    data: () => ({
      cTab:'tasks',
      cPic:'3'
    }),

    methods: {

      tabClick(currentTab){
        this.cTab=currentTab;
      },
      picClick(currentPic){
        this.cPic=currentPic;
      }
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

    /*
    #test{position:absolute;
    top:40vh;
    left:40vw;
      width:200px;
      height:50px;
    font-size: 20px;
    z-index: 5;
    border: solid 2px red;}
    */

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
