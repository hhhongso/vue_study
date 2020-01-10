<template>
  <div id="app">
    App 컴포넌트 <br>
    <datepicker></datepicker> <br>
    <button type="button" class="btn btn-primary btn-lg"> Larger Button </button> <br>
    <chart></chart>
    
  </div>

 </template>

<script>
import Datepicker from "./Datepicker.vue";
import Chart from "./Chart.vue";

export default {
  created() {
    console.log($.fn.jquery);
    console.log($.ui.version);
  },
  components: {
    Datepicker,
    Chart
    //datepicker : Datepicker 와 동일. ES6의 약식 문법 사용(객체 리터럴)
  }
  
}
</script>

<style>
#container {
  width: 100%;
  height: 400px;
}
</style>