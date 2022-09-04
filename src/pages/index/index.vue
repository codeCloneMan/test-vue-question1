<template>
    <div id="main_manage" style="height: 100%; width: 100%">
        <div class="navigate">
            <router-link tag="div" to="/test_1">
                    <span>测试一</span>
                </router-link>
            <div>
                <router-link to="/test_2">
                    <span>测试二</span>
                </router-link>
            </div>
            <div>
                <router-link to="/test_3">
                    <span>测试三</span>
                </router-link>
            </div>
            <div>
                <router-link to="/test_4">
                    <span>测试四</span>
                </router-link>
            </div>
            <div>
                <router-link to="/test_5">
                    <span>测试五</span>
                </router-link>
            </div>
            <!-- <div>
                <router-link to="/test_6">
                    <span>测试六</span>
                </router-link>
            </div> -->
        </div>
        <div class="content">
            <keep-alive>
                <router-view></router-view> 
            </keep-alive>
        
        </div>
    </div>
</template>

<script>
//按照如图所示的样式和顺序，完善路由配置
export default {
    components: {},
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    watch: {},
    methods: {},
};
</script>

<style scoped>
.navigate div router-link{
    list-style: none;
}
</style>