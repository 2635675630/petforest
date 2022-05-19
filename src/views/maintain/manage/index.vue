<template>
  <div id="box">

  </div>

</template>

<script>

export default {
    data(){
        return{
            mychart:null,
            options:{
                title: {
                    text:123,
                },
                legend: {
                    data: ['订单量']
                },
                xAxis: {
                    data: ["一月", "二月", "三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
                },
                yAxis:{},
                series: [{
                    name: '订单量',
                    type: 'bar',
                    data:[1,2,3,4,5,9,8,8,8,8,8,8]
                }]
            }
        }
    },
    
    mounted(){
        
      this.myChart = this.$echarts.init(document.getElementById("box"));
      this.myChart.setOption(this.options);
      console.log(this.myChart)
      window.onresize = () => {
                this.myChart.resize()
            }
      this.myChart.resize(); 
    }

}
</script>

<style>
#box{
    width: 100%;
    height: 100%;
}
</style>