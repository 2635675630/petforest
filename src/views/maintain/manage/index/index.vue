<template>
  <div id="box">

  </div>

</template>

<script>
import {reactive} from 'vue';
import {GetEchartData} from 'network/manage/index/index.js'
export default {
    setup(){
        let mychart=reactive()
        let options=reactive({
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
            })
        return{
            mychart,
            options
        }
    },
    created(){
        this.options.title.text=new Date().getFullYear()+"年订单增幅"
        GetEchartData().then(res=>{
            for(let i=0;i<res.data.length;i++){
                let month=new Date(res.data[i].stimechapter).getMonth()
                this.options.series[0].data[month]+=1
            }
            console.log(this.options)
        }).then(()=>{
            this.myChart.setOption(this.options);
            this.myChart.resize();
        })
    },
    mounted(){    
      this.myChart = this.$echarts.init(document.getElementById("box"));
    }

}
</script>

<style>
#box{
    width: 100%;
    height: 100%;
}
</style>