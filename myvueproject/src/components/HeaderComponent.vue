<template lang="pug">

.rightside
  .flexside
    .lefthead
        #lhd1 Website Redesign

        nav.NavMenu
            router-link.NavButtons(to='/tasks') Tasks
            router-link.NavButtons(to='/kanban') Kanban
            router-link.NavButtons(to='/activity') Activity
            router-link.NavButtons(to='/calendar') Calendar
            router-link.NavButtons(to='/files') Files

    .righthead
        .hpic1
        .hpic2
        .hpic3
        button#BtnShare Share
        button#BtnChat Chat

  router-view(@picClick="picClick($event)",
              @addTaskArr="addTaskArr($event)",
              @delTask="delTask($event)",
              :tskArr="tskArr")

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import { taskForm } from '../types/TaskForm';

@Component
export default class HeaderComponent extends Vue {
  @Prop({default:[]}) tskArr!:taskForm;

  picClick(currentPic: number): void {
    this.$emit('picAppClick', currentPic);
  }

  addTaskArr(tN: string[]): void {
    this.$emit('addTaskArr', tN);
  }

  delTask(idx:number):void{
    this.$emit('delTask', idx);
  }
}
</script>


<style scoped>


    *{
        margin: 0px;
        padding: 0px;
    }

    button {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }

    .NavButtons:active{
        border-bottom: 2px solid #ff7d30;
    }
    .NavButtons:hover{
        border-bottom: 2px solid #ff7d30;
    }
    .is-active {
        border-bottom: 2px solid #ff7d30;
    }

    .hpic1 {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background-image: url(./../assets/hpic1.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 2px;
        margin-left: 2px;

    }

    .hpic2 {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background-image: url(./../assets/hpic2.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 2px;
        margin-left: 2px;

    }

    .hpic3 {
        border-radius: 50%;
        height: 30px;
        width: 30px;
        background-image: url(./../assets/hpic3.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-top: 2px;
        margin-left: 2px;
    }


    @media (min-width: 1001px) {
        /*---------------For widescreen desktop--------------------*/

        /* --------------Site header--------------------*/
        .rightside {
            width: 81.3vw;
            height: 100vh;
            border: 0;
            background-color: #fff;

        }
        .flexside{
          display: flex;
          width: 81.3vw;
          height: 15vh;
        }

        #lhd1 {

            padding-top: 4vh;
            margin-left: 2vw;
            font-size: 32px;
            width: 400px;
            text-align: left;
        }

        #lhd1::before {
            content: "";
            background-image: url(./../assets/Shapes@2x.png);
            background-color: #FFC200;
            background-size: cover;
            float: left;
            display: block;
            width: 40px;
            height: 40px;
            z-index: 2;
            background-repeat: no-repeat;
            border-radius: 15%;
            margin-right: 0.5em;
        }

        #lhd1::after {
            content: "";
            background-image: url(./../assets/greytriple.png);
            background-size: cover;
            float: right;
            display: block;
            width: 30px;
            height: 30px;
            z-index: 2;
            background-repeat: no-repeat;
            border-radius: 50%;

        }

      .NavMenu {
        margin-left: 2vw;
        margin-top: 1vh;
        display: flex;
        width: 20vw;
        color: #008800;
      }

        .NavButtons{
          opacity: 0.7;
          font-size: 16px;
          color: #131313;
          margin-top: 3vh;
          margin-right: 2vw;
          text-decoration: none;
        }

        .righthead {
            display: flex;
            /*border: solid 1px #000000;*/
            margin-right: 20px;
            width: 350px;
            margin-left: calc(55vw - 380px);
            margin-top: 6.5vh;

        }

        #BtnShare {
            margin-left: 1vw;
            color: #131313;
            background: #EAEAEA;
            border-radius: 1vw;
            width: 4vw;
            height: 3.5vh;
            font-size: 14px;
            cursor: pointer;

        }

        #BtnChat {
            margin-left: 1em;
            color: #FFC200;
            background: #FFF8DD;
            border-radius: 1vw;
            width: 5.5vw;
            height: 3.5vh;
            font-size: 14px;
            cursor: pointer;

        }

        #BtnChat::before {
            content: "";
            background-image: url(./../assets/CombinedShape@1x.svg);
            float: left;
            display: block;
            width: 1vw;
            height: 1vw;
            z-index: 2;
            background-repeat: no-repeat;
            margin-left: 1vw;
        }
    }

    /* --------------------- Mobile -------------------------*/

      @media (max-width: 1000px)
      {
                /* Site header*/
        .rightside {
            width: 100vw;
            height: 80vh;
            border: 0;
            background-color: #fff;
        }
        .flexside{
          display: flex;
          width: 45vw;
          height: 10vh;
          /*border: solid 1px red;*/
        }

        #lhd1 {
            margin-top: 2px;
            margin-left: 2px;
            font-size: 20px;
            /*border: solid 1px red;*/
            width: 45vw;
            text-align: left;
        }

        #lhd1::before {
            content: "";
            background-image: url(./../assets/Shapes@2x.png);
            background-color: #FFC200;
            background-size: cover;
            float: left;
            display: block;
            width: 30px;
            height: 30px;
            z-index: 2;
            background-repeat: no-repeat;
            border-radius: 15%;
            margin-right: 2vw;
        }

        #lhd1::after {
            content: "";
            background-image: url(./../assets/greytriple.png);
            background-size: contain;
            float: right;
            margin-right: 3px;
            /*display: block;*/
            width: 20px;
            height: 20px;
            z-index: 2;
            background-repeat: no-repeat;
            border-radius: 50%;

        }

          .NavMenu {
              margin-left: 2px;
              margin-top: 2px;
              display: flex;
              width: 45vw;
              color: #008800;
          }

        .HeaadTabs {
          margin-left: 2px;
          margin-top: 1vh;
          display: flex;
          width: 20vw;
          color: #008800;
        }

        .NavButtons{
          opacity: 0.7;
          font-size: 16px;
          color: #131313;
          margin-right: 2vw;
          text-decoration: none;
         }


        .righthead {
            display: flex;
            /*border: solid 1px #000000;*/
            width: 55vw;
            /*margin-left: 15vw;*/

        }

        #BtnShare {
            margin-left: 5px;
            color: #131313;
            background: #EAEAEA;
            border-radius: 15px;
            width: 70px;
            height: 30px;
            font-size: 14px;
            margin-top: 2vh;
            cursor: pointer;
        }

        #BtnChat {
            margin-left: 5px;
            color: #FFC200;
            background: #FFF8DD;
            border-radius: 15px;
            width: 81px;
            height: 30px;
            font-size: 14px;
            margin-top: 2vh;
            cursor: pointer;
        }

        #BtnChat::before {
            content: "";
            background-image: url(./../assets/CombinedShape@1x.svg);
            background-size: cover;
            float: left;
            display: block;
            width: 16px;
            height: 16px;
            z-index: 2;
            background-repeat: no-repeat;
            margin-left: 5px;
        }

    }

</style>
