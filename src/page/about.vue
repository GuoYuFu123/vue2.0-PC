<!-- 关于我们 -->
<template>
    <div class="about">
        <img src="../assets/img/pic_05.png" alt="" width="100%" height="100%">
        <el-row style="margin-bottom: 80px;">
            <el-col :span="16" :offset="4">
                <h3 >关于我们</h3>
                <section>
                    <h4 style="margin-top: 0;">企业概述</h4>
                    <p><strong>广州快与慢信息科技有限公司</strong>于2017年2月创立，具有丰富的技术开发、运营、销售经验团队。</p>
                    <p>主要专注于批发市场、驾培、美容、餐饮、零售、教育等主要行业，为客户移动端的引流、支付、营销、客户管理、大数据提供全面解决方案。是一家致力于为线下商户提供支付、掌店及运营等综合解决方案的高新技术企业。</p>
                    <p>通过移动平台为商户提供最智能的服务，帮助商户实现移动互联的全面转型。 基于支付宝服务窗、口碑、口碑商圈、微信公众号等线上模块与支付宝和微信支付线下支付管理软件及配套硬件设备的开发，打造移动互联网时代智慧城市，让线下没有难做的生意。 由首展起草的行业解决方案正在全国各个城市大面积推广，为人们步入移动智慧生活提供技术支持。</p>
                </section>
                <section>
                    <h4>基本信息栏</h4>
                    <p>1、公司名称：广州快与慢信息科技有限公司</p>
                    <p>2、成立时间：2017年2月</p>
                    <p>3、总部地址：广东省广州市番禺区大学城青蓝街26号研发楼4楼</p>
                    <p>4、牌照业务范围：软件和信息技术服务业</p>
                </section>
                <section>
                    <h4>旗下产品</h4>
                    <ul>
                        <li>龙猫支付
                            <p>龙猫支付旨在提供一站式的移动支付解决方案。内部集成了支付宝，微信，京东，百付宝，QQ钱包等众多支付通道。最大可能地满足不同体量商家的收银需求。</p>
                        </li>
                    </ul>
                </section>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        name: 'about',
        data (){
            return{

            }
        }
    }
</script>

<style>
    .about{line-height: 2.5;}
    .about h3{margin-top:30px;text-align:center;font-size: 30px;color: #000;}
    .about h4{margin-top:30px;font-size: 30px;font-weight: normal;}
    .about section p{text-indent: 40px;}
    .about ul li:before{ content: '';display: inline-block;width: 8px;height: 8px; margin: 0 9px;border-radius:50%;background-color: #00bb9c;}
</style>