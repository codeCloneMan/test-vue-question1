<template>
    <div class="test-content test4">
        <div class="left-require">
            <div>
                <img class="" src="../../statics/img/table-list.jpg" alt="">
                <h2>在右侧空白区域完成如图所示的表格,表格数据见参数table_data，不得使用其他插件或组件（包括elementUI）</h2>
                <h2>表格数据查询，根据查询条件筛选数组中的值，实现搜索功能</h2>
                <h2>性别列下拉筛选功能实现</h2>
                <h2>入学时间和毕业时间排序功能实现</h2>
                <h2 style="color: red">确认完成所有测试后需使用webpack将代码打包到文件夹dist</h2>
            </div>
        </div>

        <div class="right-content">
            <!--代码区域-->

            <div class="firstBar">
                    <span>姓名：</span><input id="name" type="text" placeholder="请输入姓名模糊查询">
                <div class="div">
                    <span>电话号码：</span><input id="phone" type="text" placeholder="输入电话号码查询">
                </div>
                    <button @click="clearClick">清除</button>
                    <button id="btn" @click="btnClick">查询</button>
            </div>

            <div class="secondBar">
                <table ref="table" id="table" v-html="str">
                   
                    
                    
                </table>
            </div>

        </div>
    </div>
</template>

<script>
//表格数据查询，根据查询条件筛选数组中的值，实现搜索功能
//下拉筛选功能实现
//排序功能实现
export default {
    name: "test_4",
    created() {
        // this.renderHTML()
    },
    mounted() {
        console.log('table', document.getElementById('table'))
         this.renderHTML()
    },
    data(){
        return {
            //表格数据
            table_data:[
                {name: '张三',phone: '15222222222',sex: 'male', id: '510000000000000000',start_date: '2018-12-14 09:00',end_date: '2022-12-14 09:00'},
                {name: '李四',phone: '15221232222',sex: 'male', id: '510000000000000001',start_date: '2018-12-14 15:00',end_date: '2022-12-14 16:00'},
                {name: '韩梅梅',phone: '15222224562',sex: 'female', id: '51000000004500000',start_date: '2020-12-14 09:00',end_date: '2024-12-14 09:00'},
                {name: '李雷',phone: '15222662222',sex: 'male', id: '510000067000000000',start_date: '2017-12-14 09:00',end_date: '2020-12-14 09:00'},
                {name: '王雪',phone: '17822222222',sex: 'female', id: '515400004500000000',start_date: '2016-12-14 09:00',end_date: '2019-12-14 09:00'}
            ],
            str: `<tr>
                        <td>姓名</td>
                        <td>电话号码</td>
                        <td>性别</td>
                        <td>身份证号码</td>
                        <td>入学时间</td>
                        <td>毕业时间</td>
                    </tr>`
        }
    },
    methods: {
        btnClick: function(){
            // || && 
            // 情况： 1 输入姓名搜索  2 输入号码搜索  3 输入姓名和号码搜索  4 输入错误姓名  5输入错误号码  4 输入正确姓名错误号码 5 输入错误姓名正确号码  6 输入错误姓名和错误号码
            let name = document.getElementById('name').value
            alert(name)
            let phone = document.getElementById('phone').value
            alert(phone)
            this.clearClick()
        },
        clearClick(){
            document.getElementById('name').value = null
            document.getElementById('phone').value = null
        },
        renderHTML() {
            let table_data = this.table_data
            let str = ''
            for(let prop in table_data){
                let popContent =`
                <tr>
                        <td>${table_data[prop].name}</td>
                        <td>${table_data[prop].phone}</td>
                        <td>${table_data[prop].sex}</td>
                        <td>${table_data[prop].id}</td>
                        <td>${table_data[prop].start_date}</td>
                        <td>${table_data[prop].end_date}</td>
                      
                    </tr>`
                str += popContent
            }
            // console.log(str)
            this.str += str
            // table.appendChild(str)
            // this.$refs.table.appendChild(str)
            // let table = document.getElementById('table')
            // let testStr = document.createTextNode(str)
            // table.innerHTML(str)
            // table.appendChild(table.appendChild)


            console.log("table", table)



        }
    }
}
</script>

<style scoped>
.right-content{
    margin-top: 30px;
}
.right-content .div{
    display: inline;
    margin-left: 40px;
    margin-right: 160px;
}
.right-content .firstBar{
    margin-left: 40px;
}
.right-content .firstBar .btnClass{
    margin-left: 20px;
}
.right-content .secondBar{
    margin: 20px 40px;
}
.secondBar table{
    border-collapse: collapse;
}
.secondBar table tr:nth-child(1){
    background-color: rgb(238, 226, 209);
}
.secondBar table tr:nth-child(3){
    background-color: rgb(249, 245, 240);
}
.secondBar table td{
    border: 1px solid rgb(226,226,226);
    margin: 0;
    font-size: 16px;
    text-align: center;
    padding: 16px;
}

</style>