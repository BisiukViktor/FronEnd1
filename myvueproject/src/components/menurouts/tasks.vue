<template lang="pug">

  .article
    #taskbox
      ul
        li(v-for="(crT, idx) in tskArr" v-bind:key="idx") {{crT.tN}} {{crT.tD}} {{crT.tDate}}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  interface taskForm {
    tN: String;
    tD: String;
    tDate: String;
  }
@Component
export default class tasks extends Vue {
    tskArr: taskForm[]=[{ tN: 'Task1', tD: 'Description1', tDate: '21/11/2019' },
      { tN: 'Task2', tD: 'Description2', tDate: '25/11/2019' },
      { tN: 'Task3', tD: 'Description3', tDate: '31/01/2019' }];
}

</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    font-family: Helvetica;
  }

  @media (min-width: 1001px) {
    /*---------------For widescreen desktop-------------------------*/

    /* -------------------Central block---------------------*/
    .article {
      position: absolute;
      z-index: 3;
      width: 81.3vw;
      border: 0;
      height: 85vh;
      background-color: #eeebe4;

    }

    #taskbox {
      position: absolute;
      z-index: 2;
      background-color: #fff;
      width: 51vw;
      height: 67vh;
      border-radius: 15px;
      margin-top: 3.5vh;
      margin-left: 15vw;
      padding-left:50px;
      padding-top: 50px;
    }
    ul {
      list-style:none;
    }
  }

  /* -------------------- Mobile ------------------------*/

  @media (max-width: 1000px)
  {

    /* ------------------Central block------------------------*/
    .article {
      position: absolute;
      z-index: 1;
      width: 100vw;
      height: 60vh;
      background-color: #eeebe4;
      overflow: scroll;

    }

    #taskbox{
      position: absolute;
      z-index: 2;
      background-color: #fff;
      width: calc(100vw - 2px);
      height: calc(70vh - 2px);
      border: solid 1px #eeebe4;
      font-size: 18px;
    }
    ul {
      list-style:none;
    }
  }


</style>
