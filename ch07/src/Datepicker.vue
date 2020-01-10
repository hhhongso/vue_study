<template>
  <input id="calendar">
</template>

<script>
export default {
//mounted 일 때 DOM 요소에 접근할 수 있음 
  mounted(){
    $('#calendar').datepicker();
  }
}
</script>

<style>

</style>