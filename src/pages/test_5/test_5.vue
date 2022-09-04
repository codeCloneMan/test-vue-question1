<template>
    <div class="test-content">
        <div class="left-require">
            <div>
                <h2>
                    请求接口http://quan.suning.com/getSysTime.do，将返回的结果显示在右侧空白区域（返回结果为对象；有可能会请求失败，多试几次）
                </h2>
                <h2>请求失败或报错时需要在右侧空白区域显示"请求失败"</h2>
                <h2 style="color: red">
                    确认完成所有测试后需使用webpack将代码打包到文件夹dist
                </h2>
            </div>
        </div>

        <div class="right-content">
            <button class="request-button" @click="reqClick">
                点击发送请求
            </button>
            <div id="time">
                <!--代码区域-->
                <div v-if = "msg === '' ">
                    <h3>sysTime1Value: {{ time.sysTime1_Value }}</h3>
                    <h3>sysTime2Value: {{ time.sysTime2_Value }}</h3>
                </div>
                <div v-else>
                    <h3>{{ msg }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//请求接口http://quan.suning.com/getSysTime.do，将返回的结果显示在右侧空白区域（返回结果为对象；有可能会请求失败，多试几次）
//请求失败或报错时需要在右侧空白区域显示"请求失败"

import http from '../../statics/js/request'
export default {
    name: "test_5",
    data(){
        return {
            time : {
                sysTime1_Value: '',
                sysTime2_Value: ''
                },
            msg: '',
        }
    },
    methods: {
        reqClick(){
            // this指向 在异步axios中发生改变, 使用箭头函数不会出现此问题
            // let that = this
            http.get('http://quan.suning.com/getSysTime.do').then(res => {
                console.log(this.time.sysTime1_Value)
                this.time.sysTime1_Value = res.data.sysTime1
                this.time.sysTime2_Value = res.data.sysTime2
                this.msg = ''
            },err => {
                this.msg = err + ' 请求失败'
            })
        }
    }
}
</script>

<style scoped>
</style>