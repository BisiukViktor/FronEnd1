<template lang="pug">

.article
  #taskbox(v-show="currentTab === 'tasks'")
    ul
     li(v-for="(crT, idx) in tskArr" v-bind:key="idx") {{crT.tN}} {{crT.tD}} {{crT.tDate}}

  #activitybox(v-show="currentTab === 'activity'")
      #tdy TODAY

      #f1
          #empty1
          #arttext1 {{todaytext1}}
          #time1 {{t1}}

      #f2
          #empty2
          #arttext2 {{todaytext2}}
          #time2 {{t2}}
      #arttext3 {{todaytext3}}
      #f4
          #empty4
          #arttext4 {{todaytext4}}
          #time4 {{t4}}

      .artpics
          #pic1(@click="switchPic(0)")
          #pic2(@click="switchPic(1)")
          #pic3(@click="switchPic(2)")
          #pic4(@click="switchPic(3)")

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';

interface taskForm {
  tN: String;
  tD: String;
  tDate: String;
}
@Component
export default class centerComponent extends Vue {
 @Prop(String) currentTab:String;

  tskArr: taskForm[]=[{ tN: 'Task1', tD: 'Description1', tDate: '21/11/2019' },
    { tN: 'Task2', tD: 'Description2', tDate: '25/11/2019' },
    { tN: 'Task3', tD: 'Description3', tDate: '31/01/2019' }];

   picClick:Number;

   currentPic:Number=0;

   todaytext1:String='Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users';

   todaytext2:String='Emilee Simchenko commented on Account for teams and personal in bottom style';

   todaytext3:String='During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes';

   todaytext4:String='Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users';

   t1:String='8:40 PM';

   t2:String='7:32 PM';

   t4:String='6:02 PM';

   switchPic(cp):void{
     this.$emit('picClick', cp);
   }
}


</script>

<style scoped>


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

        /* -------------------Central block---------------------*/
        .article {
            position: absolute;
            z-index: 1;
            width: 81.3vw;
            border: 0;
            height: calc(100vh - 136px);
            background-color: #eeebe4;

        }

        #activitybox {
            position: absolute;
            z-index: 2;
            background-color: #fff;
            width: 51vw;
            height: 67vh;
            border-radius: 15px;
            margin-top: 3.5vh;
            margin-left: 15vw;
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
            font-size: 16px;
            padding: 50px;
            font-size: 20px;
        }

        #tdy {
            margin-left: 2.5vw;
            margin-top: 4vh;
            color: #131313;
            opacity: 0.5;
            font-size: 14px;
        }

        #f1 {
            display: flex;
            margin-left: 2.5vw;
            margin-top: 4vh;
        }

        #empty1 {
            background-color: #CEF9C6;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #empty1::before {
            content: "";
            display: block;
            background-image: url(./../assets/Icon@3x.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 9px;
            width: 12px;
        }

        #arttext1 {
            margin-top: 0.5vh;
            margin-left: 2vw;
            color: #131313;
            font-size: 16px;
            width: 33vw;
        }

        #time1 {

            opacity: 0.7;
            font-size: 14px;
            color: #131313;
            text-align: right;
            margin-left: 5vw;
            margin-right: 1vw;

        }

        #f2 {
            display: flex;
            margin-left: 2.5vw;
            margin-top: 2vh;
        }

        #empty2 {
            background-color: #FFF8DD;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #empty2::before {
            content: "";
            display: block;
            background-image: url(./../assets/chatblack.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 9px;
            width: 12px;
        }

        #arttext2 {
            margin-top: 0.5vh;
            margin-left: 2vw;
            color: #131313;
            font-size: 16px;
            width: 33vw;
        }

        #time2 {

            opacity: 0.7;
            font-size: 14px;
            color: #131313;
            text-align: right;
            margin-left: 5vw;
            margin-right: 1vw;
        }

        #arttext3 {
            margin-left: 6.75vw;
            margin-top: 2vh;
            color: #131313;
            font-size: 15px;
            width: 33vw;
            padding: 2vw;
            background-color: #F7F6F3;
            border-radius: 1vw;
        }

        #f4 {
            display: flex;
            margin-left: 2.5vw;
            margin-top: 4vh;
        }

        #empty4 {
            background-color: #E3EFFF;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #empty4::before {
            content: "";
            background-image: url(./../assets/downloadblack.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 12px;
            width: 12px;
        }

        #arttext4 {
            margin-top: 0.5vh;
            margin-left: 2vw;
            color: #131313;
            font-size: 16px;
            width: 33vw;
        }

        #time4 {

            opacity: 0.7;
            font-size: 14px;
            color: #131313;
            text-align: right;
            margin-left: 5vw;
            margin-right: 1vw;

        }

        .artpics {
            display: flex;
            margin-left: 7vw;
            margin-top: 2vh;

        }

        #pic1 {
            background-image: url(./../assets/pic1.png);
            height: 7vw;
            width: 7vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            cursor: pointer;
        }

        #pic2 {
            background-image: url(./../assets/pic2.png);
            height: 7vw;
            width: 7vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            margin-left: 0.7vw;
            cursor: pointer;
        }

        #pic3 {
            background-image: url(./../assets/pic3.png);
            height: 7vw;
            width: 7vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            margin-left: 0.7vw;
            cursor: pointer;
        }

        #pic4 {
            background-image: url(./../assets/pic4.png);
            height: 7vw;
            width: 7vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            margin-left: 0.7vw;
            cursor: pointer;
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

        #activitybox {
            position: absolute;
            z-index: 2;
            background-color: #fff;
            width: calc(100vw - 2px);
            height: calc(70vh - 2px);
            border: solid 1px #eeebe4;
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

        #tdy {
            margin-left: 2vw;
            margin-top: 3vh;
            color: #131313;
            opacity: 0.5;
        }

        #f1 {
            display: flex;
            margin-left: 3vw;
            margin-top: 2vh;
        }

        #empty1 {
            background-color: #CEF9C6;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #empty1::before {
            content: "";
            background-image: url(./../assets/Icon@3x.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 10px;
            width: 12px;
        }

        #arttext1 {
            margin-top: 0.5vh;
            margin-left: 2vw;
            color: #131313;
            font-size: 16px;
            width: 70vw;
        }

        #time1 {

            opacity: 0.7;
            font-size: 14px;
            color: #131313;
            text-align: right;
            margin-left: 1vw;
            margin-right: 1vw;

        }

        #f2 {
            display: flex;
            margin-left: 3vw;
            margin-top: 2vh;
        }

        #empty2 {
            background-color: #FFF8DD;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #empty2::before {
            content: "";
            background-image: url(./../assets/chatblack.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 10px;
            width: 12px;
        }

        #arttext2 {
            margin-top: 0.5vh;
            margin-left: 2vw;
            color: #131313;
            font-size: 16px;
            width: 70vw;
        }

        #time2 {

            opacity: 0.7;
            font-size: 14px;
            color: #131313;
            text-align: right;
            margin-left: 1vw;
            margin-right: 1vw;
        }

        #arttext3 {
            margin-left: 8vw;
            margin-top: 2vh;
            color: #131313;
            font-size: 15px;
            width: 80vw;
            padding: 1.5vw;
            background-color: #F7F6F3;
            border-radius: 1vw;
        }

        #f4 {
            display: flex;
            margin-left: 3vw;
            margin-top: 2vh;
        }

        #empty4 {
            background-color: #E3EFFF;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        #empty4::before {
            content: "";
            background-image: url(./../assets/downloadblack.svg);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 10px;
            width: 12px;
        }

        #arttext4 {
            margin-top: 0.5vh;
            margin-left: 2vw;
            color: #131313;
            font-size: 16px;
            width: 70vw;
        }

        #time4 {

            opacity: 0.7;
            font-size: 14px;
            color: #131313;
            text-align: right;
            margin-left: 1vw;
            margin-right: 1vw;

        }

        .artpics {
            display: flex;
            margin-left: 10vw;
            margin-top: 5vh;

        }

        #pic1 {
            background-image: url(./../assets/pic1.png);
            height: 15vw;
            width: 15vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            cursor: pointer;
        }

        #pic2 {
            background-image: url(./../assets/pic2.png);
            height: 15vw;
            width: 15vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            margin-left: 1vw;
            cursor: pointer;
        }

        #pic3 {
            background-image: url(./../assets/pic3.png);
            height: 15vw;
            width: 15vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            margin-left: 1vw;
            cursor: pointer;
        }

        #pic4 {
            background-image: url(./../assets/pic4.png);
            height: 15vw;
            width: 15vw;
            background-size: cover;
            display: block;
            border-radius: 8%;
            margin-left: 1vw;
            cursor: pointer;
        }

    }


    </style>
