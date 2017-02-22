import template from './map.html'
import echarts from 'echarts'
import $ from 'jquery'
import Vue from 'vue'

var Map=Vue.extend({
    template,
    ready(){
        var myChart=echarts.init(document.getElementById('main'))
        $.get('/echarts/datas/china.json',function(chinaJson){
          echarts.registerMap('china', chinaJson)
          function randomData() {
            return Math.round(Math.random()*1000);
          }

          var option = {
                title: {//标题
                    text: '教育经历',
                    subtext: '纯属虚构',
                    left: 'center'
              },
               tooltip: {//提示框
                    trigger: 'item'
              },
                legend: {
                    orient: 'horizontal',
                    left: 'left',
                    data:['小学','中学','高中','大学','实习']
              },
                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高','低'],           // 文本，默认为数值文本
                    calculable: true
              },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
              },
                series: [
                        {
                        name: '小学',
                        type: 'map',
                        mapType: 'china',
                        roam: false,
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        data:[
//                            {name: '北京',value: randomData() },
//                            {name: '天津',value: randomData() },
//                            {name: '上海',value: randomData() },
//                            {name: '重庆',value: randomData() },
//                            {name: '河北',value: randomData() },
//                            {name: '河南',value: randomData() },
//                            {name: '云南',value: randomData() },
//                            {name: '辽宁',value: randomData() },
//                            {name: '黑龙江',value: randomData() },
                            {name: '湖南',value: 3 }
//                            {name: '安徽',value: randomData() },
//                            {name: '山东',value: randomData() },
//                            {name: '新疆',value: randomData() },
//                            {name: '江苏',value: randomData() },
//                            {name: '浙江',value: randomData() },
//                            {name: '江西',value: randomData() },
//                            {name: '湖北',value: randomData() },
//                            {name: '广西',value: randomData() },
//                            {name: '甘肃',value: randomData() },
//                            {name: '山西',value: randomData() },
//                            {name: '内蒙古',value: randomData() },
//                            {name: '陕西',value: randomData() },
//                            {name: '吉林',value: randomData() },
//                            {name: '福建',value: randomData() },
//                            {name: '贵州',value: randomData() },
//                            {name: '广东',value: randomData() },
//                            {name: '青海',value: randomData() },
//                            {name: '西藏',value: randomData() },
//                            {name: '四川',value: randomData() },
//                            {name: '宁夏',value: randomData() },
//                            {name: '海南',value: randomData() },
//                            {name: '台湾',value: randomData() },
//                            {name: '香港',value: randomData() },
//                            {name: '澳门',value: randomData() }
                ]
                    },
                        {
                            name: '中学',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
//                                {name: '北京',value: randomData() },
//                                {name: '天津',value: randomData() },
//                                {name: '上海',value: randomData() },
//                                {name: '重庆',value: randomData() },
//                                {name: '河北',value: randomData() },
//                                {name: '安徽',value: randomData() },
//                                {name: '新疆',value: randomData() },
//                                {name: '浙江',value: randomData() },
//                                {name: '江西',value: randomData() },
//                                {name: '山西',value: randomData() },
//                                {name: '内蒙古',value: randomData() },
//                                {name: '吉林',value: randomData() },
//                                {name: '福建',value: randomData() },
//                                {name: '广东',value: randomData() },
//                                {name: '西藏',value: randomData() },
//                                {name: '四川',value: randomData() },
//                                {name: '宁夏',value: randomData() },
//                                {name: '香港',value: randomData() },
//                                {name: '澳门',value: randomData() }
                                {name:'湖南',value: 3}
                            ]
                        },
                        {
                            name: '高中',
                            type: 'map',
                            mapType: 'china',
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
//                                {name: '北京',value: randomData() },
//                                {name: '天津',value: randomData() },
//                                {name: '上海',value: randomData() },
//                                {name: '广东',value: randomData() },
//                                {name: '台湾',value: randomData() },
//                                {name: '香港',value: randomData() },
//                                {name: '澳门',value: randomData() }
                                {name:'湖南',value:3}
                ]
                        },
                        {
                            name:'大学',
                            type:'map',
                            mapType:'china',
                            data:[
                                {
                                    name:'湖南',value:3
                                }
                            ]
                        },
                    
                        {
                            name:'实习',
                            type:'map',
                            mapType:'china',
                            data:[
                                {
                                    name:'北京',value:1,
                                },
                                {
                                    name:'江苏',value:0.5
                                }
                            ]
                        }
                ]
        }
            myChart.setOption(option)
          })
        
    }
})
export default Map