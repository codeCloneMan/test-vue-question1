import { name } from 'file-loader';
import Vue from 'vue'
import Vuex from 'vuex'
//vuex参数放在此处统一管理
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        test2: {
            stuName: '',
            stuRegion: '',
            stuPhone: '',
            stuSex: '',
            stuMinzu: '',
            stuDate1: '',
            stuDate2: '',
            stuType: '',
            stuDesc: ''
        }
    },
    mutations: {
        putForm(state, step){
            state.test2.stuName = step.name
            state.test2.stuRegion = step.region
            state.test2.stuPhone = step.phone
            state.test2.stuSex = step.sex
            state.test2.stuMinzu = step.minzu
            state.test2.stuDate2 = step.date2
            state.test2.stuType = step.type
            state.test2.stuDesc = step.desc
        }
    }
})

export default store