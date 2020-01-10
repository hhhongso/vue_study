<template>
  <div id="container"></div>
</template>

<script>
export default {
mounted(){
    Highcharts.chart('container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'fruit consuption'
      },
      xAxis: {
        categories: ['apple', 'banana', 'orange']
      },
      yAxis: {
        title: {
          text: 'fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    });
  },
}
</script>

<style>

</style>