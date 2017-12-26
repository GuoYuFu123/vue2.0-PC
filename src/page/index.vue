<!-- 首页 -->
<template>
    <div class="index">
        <el-row justify="end" align="middle" type="flex" class="header">
            <el-col :span="4"></el-col>
            <el-col style="width: 94px;">
                <img src="../assets/img/logo.png" alt="" width="94" height="83">
            </el-col>
            <el-col>
                <el-menu theme="light" :default-active="currentPage" class="el-menu-demo" mode="horizontal" :router="true">
                    <el-menu-item index="/applicat"  class="noBottom">
                        <el-button type="primary" plain>在线商户申请</el-button>
                    </el-menu-item>
                    <el-menu-item index="/about">关于我们</el-menu-item>
                    <el-menu-item index="/enterprise">企业接入</el-menu-item>
                    <el-menu-item index="/product">产品与服务</el-menu-item>
                    <el-menu-item index="/">首页</el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
        <!-- 中间内容区域 -->
        <transition
                name="custom-classes-transition"
                enter-active-class="animated fadeIn"
                >
            <router-view></router-view>

        </transition>

        <footer>
            <el-row type="flex">
                <el-col :offset="4" :span="16">
                    <el-row type="flex" justify="space-between" :gutter="60">
                        <el-col class="foot-item"  style="width: 460px;">
                            <div class="footer-title">联系我们</div>
                            <div>电话:400-888-8888</div>
                            <div>邮箱:help@qq.com</div>
                            <div>地址:广东省广州市番禺区大学城青蓝街有米科技大楼4层</div>
                        </el-col>
                        <el-col class="foot-item" style="width: 300px;">
                            <div class="footer-title">我们的产品</div>
                            <div>龙猫支付商户平台</div>
                            <div>龙猫支付</div>
                        </el-col>
                        <el-col class="foot-item" style="width: 240px;">
                            <img src="../assets/img/QRcode.png" alt="">
                            <p style="text-align: center;">扫码关注我们</p>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <div class="footer-information">
                广州快与慢信息科技有限公司<br/>
                Copyright ○2017kuaiyuman All Rights Reserved………………
            </div>
        </footer>
    </div>
</template>

<script>


    export default{
        name: 'index',

        data (){
            return {
                currentPage: '/'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        created (){
            this.currentPage = this.$router.currentRoute.path;
        }
    }
</script>

<style>
    .header{height: 100px;}
    .header .el-button--primary.is-plain{
        border: 1px solid #0a8ba0;
        color: #0a8ba0;
    }
    .header .el-menu-item.is-active .el-button--primary.is-plain{
        background-color: #0a8ba0;
        color: #fff;
    }
    .header  .el-button--primary.is-plain:focus, .el-button--primary.is-plain:hover{
        background-color: #0a8ba0;
        color: #fff;
    }
    .header .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
        color: #0a8ba0;
        border-bottom: 5px solid #0a8ba0;
    }
    .noBottom{border-bottom: none!important;}
    .header .el-menu--horizontal>.el-menu-item:hover{
        border-color: #0a8ba0;
    }
    .header .el-menu--horizontal .el-menu-item:hover, .el-menu--horizontal .el-submenu__title:hover{
        background-color: transparent;
    }
    .header .el-menu--horizontal .el-menu-item{
        float: right;
    }

    .header .el-menu{
        background-color: #fff;
    }

    /* 底部footer */
    footer{padding:60px 30px;background-color: #12161f;color: #fffefe;font-size: 14px;}
    footer .footer-title{margin-bottom: 30px;font-size: 16px;font-weight: bold;color: #fff;}
    footer .footer-information{
        text-align: center;
        margin-top: 40px;
    }
    footer .foot-item div:not(.footer-title){margin: 15px 0;line-height: 30px;}
</style>
