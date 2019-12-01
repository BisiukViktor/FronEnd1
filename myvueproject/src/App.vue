<template>
  <div id="app">
    <body class="flexbody">

    <!--                LeftPanel                                   -->

    <Aside_Component :currentPic="cPic"></Aside_Component>

    <!--                Right side header and article               -->

    <div class="panel">
     <Header_Component @tabClick="tabClick($event)"></Header_Component>
      <Center_Component :currentTab="cTab" @picClick="picClick($event)"></Center_Component>
    </div>
  <!--  <div id="test">{{cTab}}</div>  -->
    </body>

  </div>
</template>

<script>

    import Aside_Component from './components/AsideComponent.vue'
    import Header_Component from './components/Header_Component.vue'
    import Center_Component from './components/Centerblock_Component.vue'

    export default {
        components:{
            Aside_Component,
            Header_Component,
            Center_Component
        },

        data: () => ({

            cTab:'tasks',
            cPic:'3'

            /* CTCounter:372,
            OTCounter:11,
            asidename1:"Jean Gonsales",
            currentPic:'',
            currentTab:"tasks",
            tab:"",
            todaytext1:"Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
            todaytext2:"Emilee Simchenko commented on Account for teams and personal in bottom style",
            todaytext3:"During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
            todaytext4:"Darika Samak mark as done Listing on Product Hunt so that we can reach as many potential users",
            t1:"8:40 PM",
            t2:"7:32 PM",
            t4:"6:02 PM",

            taskarray:[ {taskname: 'Task1', description: 'Description1', date: '21/11/2019'},
                        {taskname: 'Task2', description: 'Description2', date:'25/11/2019'},
                        {taskname: 'Task3', description: 'Description3', date:'31/01/2019'}]
                        */

        }),


            methods: {

            tabClick(currentTab){
              this.cTab=currentTab;

            },
            picClick(currentPic){
                this.cPic=currentPic;
            }

/*
                switchTab(tab) {
                    this.currentTab = tab
                },

                switchPic(cp) {
                    this.currentPic = cp

                }*/
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

/*
#test{position:absolute;
top:40vh;
left:40vw;
  width:200px;
  height:50px;
font-size: 20px;
z-index: 5;
border: solid 2px red;}
*/

  .panel { /*Центральная панель: хедер и текстовый блок в центре*/
    flex-direction: column;
  }

}



/* ------------------------------------------ Mobile ----------------------------------------------*/

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
