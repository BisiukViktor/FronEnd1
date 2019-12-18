<template lang="pug">

.rightside
  #flexside
    #lefthead
        #lhd1 Website Redesign

        nav.HeaadTabs

            router-link.HeadTabs(to='/tasks') Tasks
            router-link.HeadTabs(to='/kanban') Kanban
            router-link.HeadTabs(to='/activity', @tabClick="tabClick($event)") Activity
            router-link.HeadTabs(to='/calendar') Calendar
            router-link.HeadTabs(to='/files') Files

    #righthead
        #hpic1
        #hpic2
        #hpic3
        button#BtnShare Share
        button#BtnChat Chat

  router-view(@tabClick="tabClick($event)")

</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

@Component
export default class headerComponent extends Vue {
  switchTab(tab):void {
    this.$emit('tabClick', tab);
  }
}


</script>


<style scoped>


    *{
        margin: 0px;
        padding: 0px;
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
        #flexside{
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

        .HeaadTabs {
            margin-left: 2vw;
            margin-top: 1vh;
            display: flex;
            width: 20vw;
            color: #008800;
        }

        button {
            border: none;
            background-color: inherit;
            cursor: pointer;
        }

/*        #Tasks {
            opacity: 0.7;
            font-size: 16px;
            color: #131313;
            margin-top: 10px;

        }

        #Kanban {
            margin-left: 1.8vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;
            margin-top: 10px;

        }

        #Activity {
            margin-left: 1.8vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;
            margin-top: 10px;

        }

        #Calendar {
            margin-left: 1.8vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;
            margin-top: 10px;

        }

        #Files {
            margin-left: 1.8vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;
            margin-top: 10px;

        }

        #HeadTabs .hide {
            display: none;
        }
        #HeadTabs .show {
            display: block;
        }
*/
        #righthead {
            display: flex;
            /*border: solid 1px #000000;*/
            margin-right: 20px;
            width: 350px;
            margin-left: calc(55vw - 380px);
            margin-top: 6.5vh;

        }

        #hpic1 {
            border-radius: 50%;
            height: 2.25vw;
            width: 2.25vw;
            background-image: url(./../assets/hpic1.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;

        }

        #hpic2 {
            border-radius: 50%;
            height: 2.25vw;
            width: 2.25vw;
            background-image: url(./../assets/hpic2.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-left: 0.3vw;

        }

        #hpic3 {
            border-radius: 50%;
            height: 2.25vw;
            width: 2.25vw;
            background-image: url(./../assets/hpic3.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-left: 0.3vw;

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
            /*display: flex;*/
        }

        #lhd1 {
            margin-top: 2px;
            margin-left: 2px;
            font-size: 20px;
            /* border: solid 1px #000000;*/
            width: 100vw;
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
            margin-right: 2vw;
        }

        #lhd1::after {
            content: "";
            background-image: url(./../assets/greytriple.png);
            background-size: contain;
            float: right;
            margin-right: 3vw;
            /*display: block;*/
            width: 30px;
            height: 30px;
            z-index: 2;
            background-repeat: no-repeat;
            border-radius: 50%;

        }

        #HeaadTabs {
            margin-left: 2vw;
            margin-top: 2px;
            display: flex;
            width: 80vw;
        }

        button {
            border: none;
            background-color: inherit;
            cursor: pointer;
        }

        #Tasks {
            opacity: 0.7;
            font-size: 16px;
            color: #131313;

        }

        #Kanban {
            margin-left: 1.5vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;

        }

        #Activity {
            margin-left: 1.5vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;

        }

        #Calendar {
            margin-left: 1.5vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;

        }

        #Files {
            margin-left: 1.5vw;
            opacity: 0.7;
            font-size: 16px;
            color: #131313;


        }

        #righthead {
            display: flex;
            /*border: solid 1px #000000;*/
            width: 100vw;
            /*margin-left: 15vw;*/

        }

        #hpic1 {
            border-radius: 50%;
            height: 30px;
            width: 30px;
            background-image: url(./../assets/hpic1.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 2vh;
            margin-left: 2vw;

        }

        #hpic2 {
            border-radius: 50%;
            height: 30px;
            width: 30px;
            background-image: url(./../assets/hpic2.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 2vh;
            margin-left: 2vw;

        }

        #hpic3 {
            border-radius: 50%;
            height: 30px;
            width: 30px;
            background-image: url(./../assets/hpic3.png);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            margin-top: 2vh;
            margin-left: 2vw;
        }

        #BtnShare {
            margin-left: 15vw;
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
            margin-left: 2vw;
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
