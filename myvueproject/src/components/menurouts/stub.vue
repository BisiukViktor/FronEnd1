<template lang ="pug">
  .article
    #whitebox
      #stubmessage Coming soon... not ready yet bro)))
</template>
<script>
export default {};
</script>
<style scoped>
  *{
    border: none;
    margin: 0;
    padding: 0;
  }
  @media (min-width: 1001px) {
  .article {
    position: absolute;
    z-index: 1;
    width: 81.3vw;
    border: 0;
    height: 85vh;
    background-color: #eeebe4;
  }

  #whitebox {
    position: absolute;
    z-index: 2;
    background-color: #fff;
    width: 51vw;
    height: 67vh;
    border-radius: 15px;
    margin-top: 3.5vh;
    margin-left: 15vw;
  }

    #stubmessage {
    top: 100px;
    font-size: 20px;
    text-align: center;
    color: #000088;
  }
  }

  @media (max-width: 1000px)
  {
    .article {
      position: absolute;
      z-index: 1;
      width: 100vw;
      height: 60vh;
      background-color: #eeebe4;
      overflow: scroll;
    }

    #whitebox {
      z-index: 2;
      align-self: center;
      background-color: #fff;
      width: calc(100vw - 2px);
      height: calc(60vh - 2px);
      border: solid 1px #eeebe4;
      font-size: 20px;
    }

    #stubmessage {
      top: 100px;
      font-size: 20px;
      text-align: center;
      color: #000088;
    }
  }
</style>
