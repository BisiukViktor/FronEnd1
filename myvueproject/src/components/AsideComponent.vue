<template lang="pug">

    .aside
        #proj
            pre  PROJECTUS
        .search
            button.zoom
        br
        #user
            #userpic
            #txt
                #txt1 {{asidename1}}
                #txt2 Product Owner
            #dote3 ...
        #txtflex1
            #numtxt1(@click="tapComp")
                #t372 {{CTCounter}}
                #CT Completed Tasks

            #numtxt2(@click="tapOpen")
                #t11 {{OTCounter}}
                #OT Open Tasks

        form#asidemenu
            #menu MENU
            button#buthome Home
            button#butMT My Tasks
            #flexbut
                button#butNotif Notifications
                #yellowcircle {{curPic}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AsideComponent extends Vue {
@Prop(Number) curPic:number;

@Prop(Number) OTCounter: number;

    CTCounter:number=372;

    asidename1:String='Jean Gonsales';

    tapComp():void {
      if (window.confirm('Are you sure you want to change the number of tasks?')) {
        if (this.OTCounter > 0) {
          this.CTCounter = this.CTCounter + 1;
          this.OTCounter = this.OTCounter - 1;
        } else window.alert('Sorry no opened task now!');
      }
    }

    tapOpen():void {
      this.$router.push({ path: '/tasks' });
    }
}
</script>

<style scoped>

    *{
        margin: 0px;
        padding: 0px;
        border: none;
    }

    @media (min-width: 1001px) {
      /*----------For widescreen desktop--------------*/
      .aside {

        width: 18.7%;
        color: white;
        border: 0;
        height: 100vh;
        background-color: #000;
      }

      .aside #proj {
        font-size: 16px;
        margin-top: 5vh;
        margin-left: 2vw;
        width: 6vw;
        border: none;

      }

      /*Иконка логотипа будет псевдоэлементом*/
      #proj::before {
        content: "";
        float: left;
        display: block;
        width: 21.6px;
        height: 18.9px;
        z-index: 2;
        background: url(./../assets/Logo@3x.svg) no-repeat;
      }

      .search {
        position: absolute;
        left: 16vw;
        top: 5vh;
        padding: 0; /* Поля вокруг */
        display: inline-block; /* Ширина соответствует содержимому */
        border: none;
      }

      .zoom {

        position: absolute;
        border: none; /* Убираем рамку */
        background: transparent; /* Убираем фон */
        width: 2vh;
        height: 2.5vh; /* Размеры картинки */
        padding: 0; /* Убираем поля для IE */
      }

      .zoom::after {
        content: url(./../assets/Search@3x.svg); /* Выводим картинку лупы*/
      }

      .aside #user {
        display: flex; /* Flexcontainer  для боковой панели*/
        height: 80px;
        margin-top: 1vh;
        width: auto;
        background-color: #202020;
      }

      #userpic {
        border-radius: 50%;
        height: 48px;
        width: 48px;
        background: url(./../assets/327.png) no-repeat center center;
        background-size: cover;
        margin-top: 2vh;
        margin-left: 2vw;
      }

      #txt1 {
        margin-left: 1vw;
        margin-top: 3vh;
        font-size: 14px;

      }

      #txt2 {
        color: #9B9B9B;
        margin-left: 1vw;
        margin-top: 0.5vh;
        font-size: 12px;
      }

      #dote3 {
        color: #9B9B9B;
        width: 4.5vw;
        font-size: 16px;
        font-weight: bold;
        text-align: right;
        align-self: center;
        margin-bottom: 1vh;
        margin-right: 0.4vw;

      }

      #txtflex1 {
        display: flex; /* Второй Flexcontainer  для боковой панели */
        height: 10vh;
        width: auto;

      }

      #numtxt1 {
        margin-left: 2vw;
        margin-top: 2.5vh;
        cursor: pointer;

      }

      #t372 {
        font-size: 20px;
      }

      #CT {
        font-size: 12px;
        opacity: 0.5;
        border: none;
        background-color: inherit;
        color: inherit;
      }

      #numtxt2 {
        margin-left: 1.2vw;
        margin-top: 2.5vh;
        cursor: pointer;
      }

      #t11 {
        font-size: 20px;
      }

      #OT {
        font-size: 12px;
        opacity: 0.5;
        border: none;
        background-color: inherit;
        color: inherit;
      }

      #asidemenu {
        display: flex;
        flex-direction: column;
        margin-left: 2vw;
        margin-top: 1vh;
      }

      #menu {
        font-size: 12px;
        color: #878787;
      }

      #buthome {
        margin-top: 2.5vh;
        text-align: left;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        border: none;
      }

      #butMT {
        margin-top: 2.5vh;
        text-align: left;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        border: none;
      }

      #flexbut {
        display: flex;
        margin-top: 1.5em;
      }

      #butNotif {
        text-align: left;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        border: none;
      }

      #yellowcircle {
        margin-left: 1vw;
        background-color: #FFC200;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #131313;
        font-size: 13px;
      }
    }

    /* ----------------------- Mobile ----------------------------*/
    @media (max-width: 1000px) {

      .aside {
        display: flex;
        width: 100vw;
        color: white;
        border: 0;
        height: 20vh;
        background-color: #000;
      }

      .aside #proj {
        font-size: 16px;
        font-weight: 600;
        margin-top: 2vh;
        margin-left: 1vw;
        width: 45vw;
        border: none;

      }

      /*Иконка логотипа будет псевдоэлементом*/
      #proj::before {
        content: "";
        background-size: cover;
        float: left;
        display: block;
        width: 20px;
        height: 20px;
        z-index: 2;
        background: url(./../assets/Logo@3x.svg) no-repeat;
      }

      .search {
        position: absolute;
        left: 35vw;
        top: 2vh;
        padding: 0; /* Поля вокруг */
        display: inline-block; /* Ширина соответствует содержимому */
        border: none;
      }

      .zoom {

        position: absolute;
        border: none; /* Убираем рамку */
        background: transparent; /* Убираем фон */
        width: 2vh;
        height: 2.5vh; /* Размеры картинки */
        padding: 0; /* Убираем поля для IE */
      }

      .zoom::after {
        content: url(./../assets/Search@3x.svg); /* Выводим картинку лупы*/
      }

      .aside #user {
        display: flex; /* Flexcontainer  для боковой панели*/
        position: absolute;
        margin-left: 1px;
        margin-top: 8vh;
        height: 12vh;
        width: 45vw;
        background-color: #202020;

      }

      #userpic {

        border-radius: 50%;
        height: 48px;
        width: 48px;
        background: url(./../assets/327.png) no-repeat center center;
        background-size: cover;
        margin-top: 1vh;
        margin-left: 1px;
      }

      #txt1 {

        margin-top: 3vh;
        margin-left: 1vw;
        font-size: 14px;
        text-align: center;
        text-wrap: normal;

      }

      #txt2 {
        color: #9B9B9B;
        /*text-align: center;*/
        margin-left: 1vw;
        margin-top: 1px;
        font-size: 12px;
        text-wrap: normal;
      }

      #dote3 {
        color: #9B9B9B;
        /*width: 5vw;*/
        font-size: 16px;
        font-weight: bold;
        /*text-align: center;*/
        margin-top: 3vh;
        margin-left: 1vw;

      }

      #txtflex1 {
        /*display: flex; /* Второй Flexcontainer  для боковой панели */
        height: 20vh;
        width: 25vw;

      }

      #numtxt1 {
        margin-left: 2px;
        margin-top: 2vh;
        cursor: pointer;

      }

      #t372 {
        font-size: 20px;
      }

      #CT {
        margin-top: 1vh;
        font-size: 12px;
        opacity: 0.5;
        border: none;
        background-color: inherit;
        color: inherit;
      }

      #numtxt2 {
        margin-left: 2px;
        margin-top: 2px;

      }

      #t11 {
        font-size: 20px;
      }

      #OT {
        margin-top: 1px;
        font-size: 12px;
        opacity: 0.5;
      }

      #asidemenu {
        display: flex;
        flex-direction: column;
        margin-left: 5px;
      }

      #menu {
        margin-top: 2vh;
        font-size: 12px;
        color: #878787;
      }

      #buthome {
        margin-top: 1vh;
        text-align: left;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        border: none;
      }

      #butMT {
        margin-top: 1.5vh;
        text-align: left;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        border: none;
      }

      #flexbut {
        display: flex;
        margin-top: 1.5vh;
      }

      #butNotif {
        text-align: left;
        background-color: #000000;
        color: #FFFFFF;
        font-size: 14px;
        border: none;
      }

      #yellowcircle {
        margin-left: 1vw;
        background-color: #FFC200;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #131313;
        font-size: 13px;

      }
    }

</style>
