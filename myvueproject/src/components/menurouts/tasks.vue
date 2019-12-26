<template lang="pug">
    .article
      #taskbox
        input#nameTaskID(v-model.trim='tN' placeholder="Name of task")
        input#descTaskID(v-model.trim='tD' placeholder="Task description")
        input#dateTaskID(v-model.trim='tDate' placeholder="Deadline date")
        button#addBut(@click="addTask") Add task

        tr(v-for="(item, idx) in tskArr" v-bind:key=idx)
          td.tNClass {{tskArr[idx].tN}}
          td.tDClass {{tskArr[idx].tD}}
          td.tDateClass {{tskArr[idx].tDate}}
          td
            button#delTBut(@click="delTask(idx)") Delete
        <!--ul-->
        <!--li(v-for="(crT, idx) in tskArr" v-bind:key="idx") {{crT.tN}} {{crT.tD}} {{crT.tDate}}-->

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { taskForm } from './types/TaskForm';

@Component
export default class tasks extends Vue {
  @Prop(taskForm) tskArr:taskForm;

  tN: string='';

  tD: string='';

  tDate: string='';

  addTask():void{
    if (this.tN !== '' && this.tD !== '') {
      this.$emit('addTaskArr', [this.tN, this.tD, this.tDate]);
      this.tN = '';
      this.tD = '';
      this.tDate = '';
      this.$emit('taskIncrement');
    } else window.alert('You must fill Name of task and Task description');
  }

  delTask(idx: number):void{
    this.$emit('delTask', idx);
    this.$emit('taskDecrement');
  }
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

    input{
      border: solid 1px black;
      background-color: #eeeeee;
    }
    #addBut{
      margin-left: 1vw;
      color: black;
      border-radius: 15%;
    }

    #nameTaskID{
      width: 10vw;
      overflow: hidden;
    }

    #descTaskID{
      margin-left: 15px;
      width: 25vw;
      overflow: hidden;
    }

    #dateTaskID{
      margin-left: 15px;
      width: 5vw;
      overflow: hidden;
    }

    th{
      color: #000088;
      text-align: left;
    }
    .tNClass{
      padding-top: 15px;
      width: 10vw;
    }

    .tDClass{
      padding-top: 15px;
      padding-left: 15px;
      width: 25vw;
    }

    .tDateClass{
      padding-top: 15px;
      padding-left: 17px;
      width: 5vw;
    }

    #delTBut{
      color: red;
      border-radius: 15%;
      margin-left: 15px;
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

    #nameTaskID{
      margin-left: 3vw;
      width: 25vw;
      font-size: 18px;
    }

    #descTaskID{
      margin-left: 1vw;
      width: 50vw;
      font-size: 18px;
    }

    #dateTaskID{
      margin-left: 1vw;
      width: 15vw;
      font-size: 18px;
    }

    input{
      border: solid 1px black;
      background-color: #eeeeee;
    }
    #addBut{
      margin-left: 1vw;
      color: black;
      border-radius: 15%;
    }

    #nameTaskID{
      width: 15vw;
      overflow: hidden;
    }

    #descTaskID{
      margin-left: 15px;
      width: 35vw;
      overflow: hidden;
    }

    #dateTaskID{
      margin-left: 15px;
      width: 15vw;
      overflow: hidden;
    }

    th{
      color: #000088;
    }
    .tNClass{
      padding-left: 25px;
      padding-top: 15px;
      width: 15vw;
    }

    .tDClass{
      padding-top: 15px;
      padding-left: 15px;
      width: 35vw;
    }

    .tDateClass{
      padding-top: 15px;
      padding-left: 17px;
      width: 10vw;
    }

    #delTBut{
      color: red;
      border-radius: 15%;
      margin-left: 15px;
    }
  }


</style>
