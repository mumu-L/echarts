import template from './root.html'
import Vue from 'vue'
import echarts from 'echarts'
import Center from './center.js'
import Bottom from './bottom.js'
import mapChart from './map.js'
import Scatter from './scatter.js'
import $ from 'jquery'
import Bar from './bar.js'

var appRoot=Vue.extend({
    template,
    
    data(){
        return{
            view:'maps'
        }
    },
    
    events:{
        'child-msg':function(msg){
            this.view=msg
        }
    },
    
    
    components:{
        center:Center,
        bottom:Bottom,
        maps: mapChart,
        scatters:Scatter,
        bars:Bar
    },
    methods:{
        menu(value,event){
          this.view=value
        },
        active(menuName){
            return menuName === this.view ? 'active' : ''
        }
    }
})
export default appRoot