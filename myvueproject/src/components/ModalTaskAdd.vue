<template lang="pug">
    .modaltaskwindow(v-if="openModalTaskAdd")
      .modal_window
          .modal_content
            p Please enter: name / description / deadline of new task
            input#nameTaskID(v-model.trim='tN' placeholder="Name of task")
            input#descTaskID(v-model.trim='tD' placeholder="Task description")
            input#dateTaskID(v-model.trim='tDate' placeholder="Deadline date")
            button(@click="addTask") Add task
          button#closeButt(@click="closeWindow") Close window

</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import { taskForm } from '../menurouts/types/TaskForm';

    @Component
    export default class ModalTaskAdd extends Vue {
        @Prop({default:[]}) tskArr!:taskForm;
        @Prop() openModalTaskAdd:boolean;

        tN: string='';

        tD: string='';

        tDate: string='';

        tStatus: string='';

        addTask():void{
            if (this.tN !== '' && this.tD !== '') {
                this.$emit("addTask", [this.tN, this.tD, this.tDate, this.tStatus='To Do']);
                this.tN = '';
                this.tD = '';
                this.tDate = '';
                this.tStatus = '';
                this.$emit("closeWindow");
            } else window.alert('You must fill Name of task and Task description');
        }

        closeWindow() :void{
            this.$emit("closeWindow");
        }



    }

</script>

<style scoped>

    *{
        margin: 0px;
        padding: 0px;
        font-family: Helvetica;
    }

    .modaltaskwindow{
        background-color: rgba(8,8,8,0.3);
        left: 0;
        top: 0;
        overflow: hidden;
        position:fixed;
        width: 100vw;
        height: 100vh;
        z-index: 99;
        display: flex;
        justify-content: center;
    }

    .modal_window{
        overflow: hidden;
        z-index: 90;
        margin-top: 25vh;
    }

    .modal_content{
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding:5em;
        background-color: lightsalmon;
        z-index: 95;
    }

    button{
        background-color: lawngreen;
        border-radius: 15%;
    }

    #closeButt{
        margin-left: 42%;
    }





    @media (min-width: 1001px) {
        /*---------------For widescreen desktop-------------------------*/

        /* -------------------Central block---------------------*/

    }

    /* -------------------- Mobile ------------------------*/

    @media (max-width: 1000px)
    {

        /* ------------------Central block------------------------*/

    }


</style>
