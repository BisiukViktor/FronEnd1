<template lang="pug">

  .article
    .activitybox
      .tdy TODAY

      .f1
        #empty1
        .arttext1 {{todaytext1}}
        .time {{t1}}

      .f1
        #empty2
        .arttext1 {{todaytext2}}
        .time {{t2}}
      #arttext3 {{todaytext3}}
      .f1
        #empty4
        .arttext1 {{todaytext4}}
        .time {{t4}}

      .artpics
        #pic1(@click="switchPic(0)")
        #pic2(@click="switchPic(1)")
        #pic3(@click="switchPic(2)")
        #pic4(@click="switchPic(3)")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';

@Component
export default class activity extends Vue {
    todaytext1:string='Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users';

    todaytext2:string='Emilee Simchenko commented on Account for teams and personal in bottom style';

    todaytext3:string='During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes';

    todaytext4:string='Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users';

    t1:string='8:40 PM';

    t2:string='7:32 PM';

    t4:string='6:02 PM';

    test:number=3;

    switchPic(cp:number):void{
      this.$emit('picClick', cp);
    }
}

</script>

<style scoped>

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
      height: 85vh;
      background-color: #eeebe4;

    }

    .activitybox {
      position: absolute;
      z-index: 2;
      background-color: #fff;
      width: 51vw;
      height: 67vh;
      border-radius: 15px;
      margin-top: 3.5vh;
      margin-left: 15vw;
    }

    .tdy {
      margin-left: 2.5vw;
      margin-top: 4vh;
      color: #131313;
      opacity: 0.5;
      font-size: 14px;
    }

    .f1 {
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

    .arttext1 {
      margin-top: 0.5vh;
      margin-left: 2vw;
      color: #131313;
      font-size: 16px;
      width: 33vw;
    }

    .time {
      opacity: 0.7;
      font-size: 14px;
      color: #131313;
      text-align: right;
      margin-left: 5vw;
      margin-right: 1vw;
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

    .activitybox {
      position: absolute;
      z-index: 2;
      background-color: #fff;
      width: calc(100vw - 2px);
      height: calc(70vh - 2px);
      border: solid 1px #eeebe4;
    }

    .tdy {
      margin-left: 2vw;
      margin-top: 3vh;
      color: #131313;
      opacity: 0.5;
    }

    .f1 {
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

    .arttext1 {
      margin-top: 0.5vh;
      margin-left: 2vw;
      color: #131313;
      font-size: 16px;
      width: 70vw;
    }

    .time {
      opacity: 0.7;
      font-size: 14px;
      color: #131313;
      text-align: right;
      margin-left: 1vw;
      margin-right: 1vw;
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
