<!-- 在线商户申请 -->
<template>
    <div class="applicat">
        <el-row>
            <el-col :span="16" :offset="4" style="background-color: #fff;padding: 20px;margin-top:20px;margin-bottom: 20px;">
                <el-row>
                    <el-col :span="20" :offset="2">
                <img src="../assets/img/logo_01.png" alt="" width="100%" height="100%">
                <h3>新用户申请表单</h3>
                <p style="font-size: 24px;line-height: 1.6;margin-bottom: 30px;">非常感谢您选择龙猫支付！请您详细填写相关资料，稍后会有顾问人员跟您详细沟通，当天即可免费开通.</p>
                <div class="profit">
                    <h4>开通龙猫支付后,您将享有如下权益:</h4>
                    <p>1、O成本开通微信、支付宝。京东钱包、QQ钱包等主流支付业务；</p>
                    <p>2、提现0手续费，满10元即可提现，今日提现，明日到账；</p>
                    <p>3、新商家开通后可享受丰富的营销活动资源；</p>
                    <p>4、与50万+商户一起，享受随时随地支付收款，为好生意增添助力。</p>
                </div>
                <el-row type="flex" align="middle" style="padding: 50px;">
                    <el-col style="width: 300px;color: #0a8ba0;font-weight: 600;line-height: 1.6;">免费咨询热线:<p>400-800-8888</p></el-col>
                    <el-col style="width: 300px;text-align: center;">
                        <img src="../assets/img/QRcode.png" alt="">
                        <p style="line-height: 1.6;font-size:20px;color: #0a8ba0;">扫一扫关注龙猫支付<br/>手机申请新商家更简便</p>
                    </el-col>
                </el-row>

                        <div>申请人信息</div>
                <div class="form">
                    <el-form label-position="left" :rules="rules" :model="form" ref="form" label-width="85px">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="微信号" prop="WXAccount">
                            <el-input v-model="form.WXAccount"></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式" prop="phone">
                            <el-input v-model="form.phone"></el-input>
                        </el-form-item>
                        <div>店铺信息(需要实体店铺/公司才能开通)</div>
                        <el-form-item label="店铺名称" prop="companyName">
                            <el-input v-model="form.companyName"></el-input>
                        </el-form-item>
                        <el-form-item label="所属行业" prop="industry">
                            <el-input v-model="form.industry"></el-input>
                        </el-form-item>
                        <el-form-item label="营业执照" prop="license">
                            <el-radio-group v-model="form.license">
                                <el-radio label="备选项1"></el-radio>
                                <el-radio label="备选项2"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="店铺地址">
                            <address-select
                                :ifCheckForm="ifCheckForm"
                                @change="addressChange"
                            ></address-select>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" size="large" @click="handlerSubmit">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Form, FormItem, Input, Radio, RadioGroup} from 'element-ui'
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Radio)
    Vue.use(RadioGroup)

    import addressSelect from 'src/components/address.vue'

    export default {
        name: 'applicat',
        components:{
            addressSelect
        },
        data (){
            return {
                rules:{
                    name: [{required: true,message:'请输入姓名',trigger:'blur' }],
                    WXAccount: [{required: true,message:'请输入微信号',trigger:'blur' }],
                    phone: [{required: true,message:'请输入联系方式',trigger:'blur' }],
                    companyName: [{required: true,message:'请输入店铺名称',trigger:'blur' }],
                    industry: [{required: true,message:'请输入所属行业',trigger:'blur' }],
                    license: [{required: true,message:'请选择营业执照',trigger:'change' }],
                    province:[{required: true,message:'请选择店铺地址',trigger:'change' }],
                    city:[{required: true,message:'',trigger:'change' }],
                    area:[{required: true,message:'',trigger:'change' }],
                    street:[{required: true,message:'请填写街道信息',trigger:'blur' }],
                    photo:[{required: true,message:'请选择门头照片',trigger:'blur' }],
                },
                form: {
                    name: '',
                    WXAccount: '',
                    phone: '',
                    companyName: '',
                    industry: '',
                    license: '',
                    province:'',
                    city:'',
                    area:'',
                    street:'',
                    photo:''
                },
                ifCheckForm: false
            }
        },
        methods: {
            addressChange (val){
                console.log('地址改变', val);
                this.form.province = val.province;
            },
            handlerSubmit (){
                this.ifCheckForm = true;
                this.$refs.form.validate((valid) => {

                }) ;
            }
        }
    }
</script>

<style>
    .applicat{background-color: #efefef;font-size: 24px;line-height: 2.5;}
    .applicat h3{text-align: center;margin-bottom: 20px;}

    .applicat .profit{border: solid 1px #0a8ba0;border-radius:6px;color: #0a8ba0;padding: 10px 15px;}
    .applicat .profit h4{font-size: 24px;}
    .applicat .profit p{font-size: 24px;line-height: 1.6;}
    .applicat .form{border-top: solid 6px #0a8ba0;padding: 30px 10px;}
    .applicat .form .el-form-item__label{    text-align: justify;  text-align-last: justify; margin-right: 15px;}
    .el-form-item__content{margin-bottom: 15px;}
    .applicat .form .el-form-item__content>.el-input{width: 80%;min-width: 300px;}
    .applicat .form .el-form-item__error{left: 15px;}
</style>