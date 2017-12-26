<!-- 产品与服务 -->
<template>
    <div class="product">
        <img src="../assets/img/pic_05.png" alt="" width="100%" height="100%">
        <el-row>
            <el-col :span="16" :offset="4">
                <div class="title">龙猫支付是什么?</div>
                <p>龙猫支付旨在提供一站式的移动支付解决方案。内部集成了支付宝，微信，京东，百付宝，QQ钱包等众多支付通道。最大可能地满足不同体量商家的收银需求。</p>
                <div class="title">支付聚合</div>
                <p>我们致力于向用户提供最全面的支付方式，聚合多种支付渠道（更多支付敬请期待），万码归一码，让商家更省心。</p>
                <el-row type="flex" justify="start" :gutter="60" style="margin-top: 30px;">
                    <el-col style="width: 186px;">
                        <img src="../assets/img/WX.png" alt="">
                    </el-col>
                    <el-col style="width: 186px;">
                        <img src="../assets/img/ZFB.png" alt="">
                    </el-col>
                    <el-col style="width: 186px;">
                        <img src="../assets/img/YL.png" alt="">
                    </el-col>
                </el-row>
                <div class="line"></div>
                <div class="title">定向客户群</div>
                <p>打破地域限制，无需硬件设备，真正地随时随地扫码收钱付款，适合多种商户类型:</p>
                <ul>
                    <li>餐饮：小吃店、饭店、冷饮店；</li>
                    <li>商场超市：便利店、各种超市及商场；</li>
                    <li>其他零售商户（散户）：服装、鞋帽、美容美发、医药、酒店等；</li>
                    <li>连锁型零售商户；</li>
                    <li>有线上收款需求的存量零售商户。</li>
                </ul>
                <div class="line"></div>
                <div class="title">操作流程</div>
                <el-row type="flex" justify="space-around" class="step">
                    <el-col class="step_item">
                        <img src="../assets/img/step1.png" alt="" width="240px">
                    </el-col>
                    <el-col class="step_item">
                        <img src="../assets/img/step2.png" alt="" width="240px">
                    </el-col>
                    <el-col class="step_item">
                        <img src="../assets/img/step3.png" alt="" width="240px">
                    </el-col>
                    <el-col class="step_item">
                        <img src="../assets/img/step4.png" alt="" width="240px">
                    </el-col>
                </el-row>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: 'product',
        data (){
            return {

            }
        }
    }
</script>

<style>
    .product{font-size: 16px;color: #333; line-height: 2.5;}
    .product .title{
        font-size: 30px;
        color: #14110f;
        margin-top: 35px;
        font-weight: bold;
    }
    .product ul{ text-align: left; padding-bottom: 20px;}
    .product ul li{ font-size: 14px; margin: 10px 0; list-style: none; }
    .product ul li:before{ content: '';display: inline-block;width: 8px;height: 8px; margin: 0 9px;border-radius:50%;background-color: #00bb9c;}
    .line{border-bottom: solid 1px #e9e9e9;margin-top: 30px;}

    .product .step{margin: 20px 0 40px;flex-wrap: wrap;}
    .product .step_item{width:240px;margin: 20px;}
</style>