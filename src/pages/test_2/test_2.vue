<template>
    <div class="test-content">
        <div class="left-require">
            <div>
                <img src="../../statics/img/form-list.jpg" alt="" />
                <h2>
                    1、在右侧空白区域按照图片所示完成表单(可使用elementui)，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中
                </h2>
                <h2>2、在右侧空白区域以键值对的形似显示保存到vuex的数据</h2>
                <h2>
                    3、给首页的 "跳转表单按钮"
                    添加点击事件，点击后可跳转到本页面，并读取上一次验证通过并保存到的vuex中的数据，显示到表单
                </h2>
                <h2>
                    4、给身份证号码、电话号码添加正则验证，毕业时间需比入学时间晚3年
                </h2>
                <h2 style="color: red">
                    确认完成所有测试后需使用webpack将代码打包到文件夹dist
                </h2>
            </div>
        </div>

        <div class="right-content">
            <!--代码区域-->

            <el-form ref="form" :model="form" :rules="rules" label-width="180px" size="medium"  
            >
                <el-form-item label="学生名称" prop="name"
                >
                    <el-input 
                        class="widthInput" 
                        v-model="form.name"
                        >
                    </el-input>
                </el-form-item>

                <el-form-item label="身份证号码" prop="region"
                >
                    <el-input class="widthInput" v-model="form.region"></el-input>
                </el-form-item>

                <el-form-item label="电话号码" prop="phone"
                >
                    <el-input class="widthInput" v-model="form.phone"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="sex"
                >
                    <el-radio-group v-model="form.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="民族" prop="minzu"
                >
                    <el-select
                        v-model="form.minzu"
                        placeholder="请选择所属民族"
                    >
                        <el-option label="汉族" value="hanzu"></el-option>
                    </el-select>
                </el-form-item>
                
                <el-form-item label="入学时间" prop="date1"
                >
                    <el-col :span="11">
                        <el-date-picker
                            type="date"
                            placeholder="选择日期时间"
                            v-model="form.date1"
                            style="width: 100%"
                        ></el-date-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="毕业时间" prop="date2"
                >
                    <el-col :span="11">
                        <el-date-picker
                            placeholder="选择日期时间"
                            v-model="form.date2"
                            style="width: 100%"
                        ></el-date-picker>
                    </el-col>
                </el-form-item>

                <el-form-item label="所选课程" prop="type"
                >
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox
                            label="语文"
                            name="type"
                        ></el-checkbox>
                        <el-checkbox label="数学" name="type"></el-checkbox>
                        <el-checkbox
                            label="英语"
                            name="type"
                        ></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                
                <el-form-item label="备注">
                    <el-input class="widthInput" type="textarea" v-model="form.desc"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit(form)"
                        >提交
                    </el-button>
                    <el-button @click="resetSubmit"
                    >清空
                    </el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>
import red from '../test_3/color/red.vue';
//测试一：
//1、按照图片完成表单，并添加表单验证，点击保存时如果验证通过，将表单数据保存到vuex中
//2、在右侧空白区域以键值对的形似显示保存到vuex的数据
//3、给首页的 "跳转表单按钮" 添加点击事件，点击后可跳转到本页面，并读取vuex中的数据，显示到表单
export default {
    components: { red },
    name: "test_2",
    data() {
        return {
            form: {
                name: '',
                region: '',
                phone: '',
                sex: '',
                minzu: '',
                date1: '',
                date2: '',
                // delivery: false,
                type: [],
                // resource: '',
                desc: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请输入身份证号码', trigger: 'change' }
                ],
                phone: [
                    { required: true, message: '请输入电话号码', trigger: 'blur' },
                    { min: 3, max: 11, message: '最大长度为11位数', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '请选择性别', trigger: 'blur' }
                ],
                minzu: [
                    { required: true, message: '请选择民族', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个课程', trigger: 'change' }
                ]
            }
        };
    },
    methods: {
        onSubmit(form) {
            // console.log(this.$refs)
            // 此处$refs获取到的是对象{form:vuecomponent}
            this.$refs['form'].validate((valid) => {
                if (valid){
                    console.log('success');
                    // 提交表单后 清空数据
                    this.$store.commit('putForm', form)
                    this.resetSubmit()
                }else {
                    console.log('error submit');
                    return false
                }
            }
        )},
        // 清空表单
        resetSubmit(){
            this.$refs.form.resetFields()
        }
    }
};
</script>

<style scoped>
.right-content{
    /* margin: 30px auto; */
    margin-top: 30px;
}
.right-content .widthInput{
    width: 450px;
}
</style>