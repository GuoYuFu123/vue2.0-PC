<!-- 企业接入 -->
<template>
    <div class="enterprise">
        <img src="../assets/img/pic_05.png" alt="" width="100%" height="100%">
        <el-row type="flex" justify="start" style="margin-bottom: 80px;">
            <el-col :span="16" :offset="4">
                <h3>商户服务导航</h3>
                <div>
                    <div class="question">Q:商户需满足什么条件？</div>
                    <div class="answer">
                        <p>A: 1、经工商行政管理机关（或主管机关）核准登记，依法经营，有良好的商业信誉；</p>
                        <p>2、在当地金融机构开立银行结算账户；</p>
                        <p>3、未被通报列入禁止发展商户名单；</p>
                        <p>4、满足上述条件的个体经营者及企业，均可成为新生支付服务的商户。</p>
                    </div>

                    <div class="question">Q:如何接入服务？</div>
                    <div class="answer">
                        <p>A: 商户在平台提交申请，新生录入基本信息审核、开通产品、技术对接、审核通过、用户使用。</p>
                    </div>
                    <div class="question">Q: 成为商户需要办理哪些手续？</div>
                    <div class="answer">
                        <p>A: 拨打商户热线：400-089-0098，留下您的联系方式和基本资料，新生支付客户经理将主动联系您，为您答疑解惑、提供全程服务。其中涉及的主要手续包括：</p>
                        <p>1、资质认证：提供资质认证文件、并完成实名认证；</p>
                        <p>2、合同签约：根据您选择的产品和服务，签订纸质合同；</p>
                        <p>3、生成账号：由新生支付客户经理根据您提供的信息，为您注册有效账号、开通服务。</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        name: 'enterprise',
        data (){
            return {

            }
        }
    }
</script>

<style>
    .enterprise{line-height: 2.5;}
    .enterprise h3{margin:30px;text-align:center;font-size: 30px;color: #000;}
    .enterprise .question{
        font-size: 20px;
        color: #0a8ba0;
        margin-top: 30px;
    }
    .enterprise .answer{
        font-size: 16px;
    }
</style>