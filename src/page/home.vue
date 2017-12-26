<!-- 首页内容 -->
<template>
    <div class="home">
        <swiper :options="swiperOption" ref="mySwiperA">
            <!-- 幻灯内容 -->
            <swiper-slide v-for="slide in slides">
                <img src="../assets/img/slide_01.png" alt="" width="100%">
            </swiper-slide>
            <!-- 以下控件元素均为可选（使用具名slot来确定并应用一些操作控件元素） -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <el-row type="flex" justify="space-around" class="flex-box">
            <el-col  class="flex-item">
                <img src="../assets/img/icon_01.png" alt="">
                <p class="img-title">移动支付方案</p>
                <div class="line"></div>
                <ul>
                    <li>支付宝钱包已拥有 1.7亿 用户，当面付正在引领线下 门店支付的变革。 </li>
                    <li>微信用户已超 7亿 ，扫码已潜移默化的融入</li>
                    <li>信用卡、银联、京东钱包、百度钱包……更多选择。</li>
                </ul>
            </el-col>
            <el-col  class="flex-item">
                <img src="../assets/img/icon_02.png" alt="">
                <p class="img-title">移动支付优势显著</p>
                <div class="line"></div>
                <ul>
                    <li>只需扫一扫，秒速搞定，还无需找零！  </li>
                    <li>顾客钱不够？带手机就行，总有一种方式适合您！  </li>
                    <li>现金不过手，安全到账！</li>
                </ul>
            </el-col>
            <el-col  class="flex-item">
                <img src="../assets/img/icon_03.png" alt="">
                <p class="img-title">传统收款弊端</p>
                <div class="line"></div>
                <ul>
                    <li>超市排队到天亮，上班排队到迟到，人多拥挤排队到 狂躁！</li>
                    <li>找零钱费时间，服务慢照顾不周，久而久之口碑差！</li>
                    <li>零钱收不全，假币认不出，收银太忙找错钱！</li>
                </ul>
            </el-col>
        </el-row>

        <!-- 图文区域 -->
        <!-- 大屏幕显示图文 -->
        <div class="big-screen">
            <img src="../assets/img/pic_01.png" alt="" width="100%" height="100%">
            <img src="../assets/img/pic_02.png" alt="" width="100%" height="100%">
            <img src="../assets/img/pic_03.png" alt="" width="100%" height="100%">
            <img src="../assets/img/pic_04.png" alt="" width="100%" height="100%">
        </div>
        <!-- 小屏幕显示图文 -->
        <div class="small-screen">
            <img src="../assets/img/pic_01.png" alt="" width="100%" height="100%">
            <img src="../assets/img/pic_02.png" alt="" width="100%" height="100%">
            <img src="../assets/img/pic_03.png" alt="" width="100%" height="100%">
            <img src="../assets/img/pic_04.png" alt="" width="100%" height="100%">
        </div>

        <!-- 合作伙伴 -->
        <div class="partner">
            <div class="partner_title">合作伙伴</div>
            <el-row>
                <el-col :span="16" :offset="4">
                    <el-row class="flex-content" type="flex" :gutter="80" justify="center">
                        <el-col>
                            <img src="../assets/img/HJ.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/WX.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/ZFB.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/QQqb.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/lkl.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/JD.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/BD.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/YL.png" alt="" width="126" height="126">
                        </el-col>
                        <el-col>
                            <img src="../assets/img/OKcard.png" alt="" width="126" height="126">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    let swiperOption = {
        // 所有配置均为可选（同Swiper配置）
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象（假如你需要使用获取swiper对象来做什么事，那么这个属性一定要是true）
        notNextTick: true,
        autoplay: 3000,
        grabCursor: true,
        loop: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        onTransitionStart(swiper){
            console.log(swiper)
        },
    }
    export default{
        name: '',
        components: {
            swiper, swiperSlide
        },
        data(){
            return {
                swiperOption: swiperOption,
                slides: [
                    {
                        url:'',
                        img:'static/img/slide_01.png'
                    },
                    {
                        url:'',
                        img:'static/img/slide_01.png'
                    }
                ],
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiperA.swiper
            }
        },
        mounted (){
//            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
<style>
    /* 中间介绍 */
    .flex-box{ text-align: center; color: #000; padding: 60px; }
    .flex-box img{  width: 130px; height: 120px;  }
    .flex-box .flex-item{ max-width: 340px;}
    .flex-box .img-title{ font-size: 16px;font-weight: bold; }
    .flex-box .line{ border-bottom: solid 1px #ccc; margin: 30px 0;}
    .flex-box ul{ text-align: left; }
    .flex-box ul li{ font-size: 14px; margin: 10px 0; list-style: none; }
    .flex-box ul li:before{ content: '';display: inline-block;width: 8px;height: 8px; margin: 0 9px;border-radius:50%;background-color: #00bb9c;}

    /* 合作伙伴 */
    .partner{ border-top: solid 80px #0f8297;padding: 60px 0;}
    .partner .partner_title{text-align: center;font-size: 30px;color: #000;font-weight: bold;margin-bottom: 40px;}
    .partner .flex-content{flex-wrap: wrap;}
    .partner .flex-content .el-col{width: auto;}

    .small-screen{display: none;}

    @media screen and (max-width: 1200px){
        .small-screen{display: block;}
        .big-screen{display: none;}
    }
</style>