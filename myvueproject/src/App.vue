<template lang="pug">
  div#app
   .flexbody
    AsideComponent(:curPic="cappPic", :OTCounter="oTN")

    .panel
      keep-alive
        HeaderComponent(@picAppClick="picAppClick($event)",
                        @addTaskArr="addTaskArr($event)",
                        @delTask="delTask($event)",
                        :tskArr="tskArr")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import AsideComponent from './components/AsideComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import router from './router/index';
import { taskForm } from './components/menurouts/types/TaskForm';

  @Component({
    components: {
      AsideComponent,
      HeaderComponent,
    },
  })
export default class App extends Vue {
    /* tskArr = [{ tN: 'Task1', tD: 'Description1', tDate: '21/11/2019' },
       { tN: 'Task2', tD: 'Description2', tDate: '25/11/2019' },
       { tN: 'Task3', tD: 'Description3', tDate: '31/01/2019' }]; */
    created():void {
      this.tskArr = [{ tN: 'Task1', tD: 'Description1', tDate: '21/11/2019' },
        { tN: 'Task2', tD: 'Description2', tDate: '25/11/2019' },
        { tN: 'Task3', tD: 'Description3', tDate: '31/01/2019' }];
    }

     cappPic:number=3;

     oTN:number=3;

     picAppClick(currentPic:number):void{
       this.cappPic = currentPic;
     }

     addTaskArr(tN: string[]): void {
       this.tskArr.push({ tN: tN[0], tD: tN[1], tDate: tN[2] });
       this.oTN = this.oTN + 1;
     }

     delTask(idx:number):void{
       this.tskArr.splice(idx, 1);
       this.oTN = this.oTN - 1;
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
