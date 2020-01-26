<template lang="pug">
    .article
      #taskbox
        transition-group(name="firstshow" v-on:after-enter="enter")
          tr(v-for="(item,idx) in tskArr" :key="idx+1" v-if=" idx<index " :class="[idx==NewTaskIndex-1 && isNewTask ? 'new-task' : '']")
                td.tNClass {{tskArr[idx].tN}}
                td.tDClass {{tskArr[idx].tD}}
                td.tStatusClass {{tskArr[idx].tStatus}}
                td.tDateClass {{tskArr[idx].tDate}}
                td
                    button#delTBut(@click="delTask(idx)") Delete
        br
        hr#line2
        br
        input#nameTaskID(v-model.trim='tN' placeholder="Name of task")
        input#descTaskID(v-model.trim='tD' placeholder="Task description")
        input#dateTaskID(v-model.trim='tDate' placeholder="Deadline date")
        button#addBut(@click="addTask") Add task

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { taskForm } from './types/TaskForm';

@Component
export default class tasks extends Vue {
  @Prop({default:[]}) tskArr!:taskForm;

  tN: string='';

  tD: string='';

  tDate: string='';

  tStatus: string='';

  idx: number;

  index: number=0;

  NewTaskIndex:number=0;

  isNewTask:boolean=false;

  addTask():void{
    if (this.tN !== '' && this.tD !== '') {
      this.$emit('addTaskArr', [this.tN, this.tD, this.tDate, this.tStatus='To Do']);
      this.tN = '';
      this.tD = '';
      this.tDate = '';
      this.tStatus = '';
      this.NewTaskIndex++;
      this.isNewTask=true;
    } else window.alert('You must fill Name of task and Task description');
  }

  delTask(idx: number):void{
    this.$emit('delTask', idx);
  }

    mounted():void
    {
        this.NewTaskIndex=this.tskArr.length;
        this.start();
    }
    enter():void
    {
        this.index=this.index+1;
    }

    start():void
    {
        this.index=1;
    }
}

</script>

<style scoped>

  *{
    margin: 0px;
    padding: 0px;
    font-family: Helvetica;
  }


  .new-task {
      animation-name: blinker;
      animation-iteration-count: 4;
      animation-timing-function: ease;
      animation-duration: 0.5s;
  }
  @keyframes blinker {
      from { color: black; } to { color: blue; }
      }

  .firstshow-enter-active,
  .firstshow-leave-active {
      transition: font-size .4s;
  }

  .firstshow-enter,
  .firstshow-leave-to {
      font-size: 24px;
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
    #line2 {
          border: 2px solid blue;
          width: 95%;
          margin-top: 10px;
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

    .tNClass{
      padding-top: 15px;
      width: 10vw;
/*      animation-name: taskText;
      animation-duration: 4s;*/
    }

    .bigtext{
        animation-name: taskText;
        animation-duration: 4s;
    }

    .tDClass{
      padding-top: 15px;
      padding-left: 15px;
      width: 20vw;
    }
    .tStatusClass{
      padding-top: 15px;
      padding-left: 15px;
      width: 5vw;
    }

    .tDateClass{
      padding-top: 15px;
      padding-left: 10px;
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
      width: 20vw;
      font-size: 18px;
      overflow: hidden;
    }

    #descTaskID{
      margin-left: 1vw;
      width: 40vw;
      font-size: 18px;
      overflow: hidden;
    }

    #dateTaskID{
      margin-left: 1vw;
      width: 15vw;
      font-size: 18px;
      overflow: hidden;
    }
    #line2 {
          border: 2px solid blue;
          width: 95%;
          margin-top: 10px;
    }
    input{
      border: solid 1px black;
      background-color: #eeeeee;
    }
    #addBut{
      margin-left: 3px;
      color: black;
      border-radius: 15%;
    }

    th{
      color: #000088;
    }
    .tNClass{
      padding-left: 2px;
      padding-top: 15px;
      width: 15vw;
      overflow: hidden;
    }

    .tDClass{
      padding-top: 15px;
      padding-left: 2px;
      width: 25vw;
      overflow: hidden;
    }

    .tDateClass{
      padding-top: 15px;
      padding-left: 2px;
      width: 12vw;
      overflow: hidden;
    }

    .tStatusClass{
        padding-top: 15px;
        padding-left: 1px;
        width: 15vw;
    }


    #delTBut{
      color: red;
      border-radius: 15%;
      margin-left: 2px;
    }
  }


</style>
