<template>
  <div id="box">

  </div>

</template>

<script>
import {GetEchartData} from 'network/manage/index/index.js'
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
                    data:[0,0,0,0,0,0,0,0,0,0,0,0]
                }]
            }
        }
    },
    created(){
        this.options.title.text=new Date().getFullYear()+"年订单增幅"
        GetEchartData().then(res=>{
            for(let i=0;i<res.data.length;i++){
                let month=new Date(res.data[i].stimechapter).getMonth()
                this.options.series[0].data[month]++
            }
            console.log(this.options)
        })
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