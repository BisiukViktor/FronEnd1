<template lang="pug">
    .article
      #taskbox
        hr#line1
        br
        table.taskTable
            th.tHat To Do
            th.tHat In Progress
            th.tHat Done
            tr
                td.t1
                    div.tcolumn(v-for="(item, idx) in tskArr" v-bind:key=idx)
                        p(v-if="tskArr[idx].tStatus=='To Do'") {{tskArr[idx].tN}} : {{tskArr[idx].tDate}}
                td.t1
                    div.tcolumn(v-for="(item, idx) in tskArr" v-bind:key=idx)
                        p(v-if="tskArr[idx].tStatus=='In Progress'") {{tskArr[idx].tN}} : {{tskArr[idx].tDate}}
                td.t1
                    div.tcolumn(v-for="(item, idx) in tskArr" v-bind:key=idx)
                        p(v-if="tskArr[idx].tStatus=='Done'") {{tskArr[idx].tN}} : {{tskArr[idx].tDate}}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { taskForm } from './types/TaskForm';

@Component
export default class tasks extends Vue {
  @Prop(taskForm) tskArr!:taskForm;

  tN: string='';

  tD: string='';

  tDate: string='';

  tStatus: string='';
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
    #line1 {
        border: 2px solid blue;
        width: 95%;
        margin-top: 10px;
    }

    .taskTable{
        width: auto;
    }

    .tHat{
        width:16vw;
    }
    .tcolumn{
        width: 16vw;
        align-content: center;
    }
    .t1{
        border: 1px blue
    }
    p{
        text-align: center;
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
    #line1 {
      border: 2px solid blue;
      width: 95%;
      margin-top: 10px;
    }
      .taskTable{
          width: auto;
      }

      .tHat{
          width:30vw;
      }
      .tcolumn{
          width: 30vw;
          align-content: center;
      }
      .t1{
          border: 1px blue
      }
      p{
          text-align: center;
      }
  }

</style>
