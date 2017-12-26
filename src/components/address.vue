<!-- 地址选择组件 -->
<template>
    <el-form :model="form" class="demo-ruleForm" :rules="rules" ref="form" label-position="top">

        <el-row class="address" type="flex" :gutter="10" style="flex-wrap: wrap;">
            <el-col :span="7">
                <el-form-item prop="province">
                    <el-select v-model="form.province" placeholder="请输入省" @change="proChange">
                        <el-option
                                v-for="item in provinces"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :span="7">
                <el-form-item prop="city">
                    <el-select v-model="form.city" placeholder="请输入市" @change="cityChange">
                        <el-option
                                v-for="item in citys"
                                :key="item.value"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :span="7">
                <el-form-item prop="area">
                    <el-select v-model="form.area" placeholder="请输入区" @change="areaChange">
                        <el-option
                                v-for="area in areas"
                                :key="area"
                                :value="area">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>

            <el-col :span="12" style="margin-top: 15px;">
                <el-form-item prop="detail">
                    <el-input
                            placeholder="请填写详细地址"
                            :number="true"
                            v-model="form.detail">
                    </el-input>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
</template>
<script>
    import Vue from 'vue'
    //    import store from 'src/store.js'
    import addressData from '../assets/addressData.js'
    import { Form, FormItem, Input, Select, Option } from 'element-ui'
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Select)
    Vue.use(Option)

    function formatData(data) {
        var result = [];
        for (var key in data) {
            result.push({
                value: key
            })
        }
        return result
    }

    export default {
        name: 'address',
        props: ['ifCheckForm'],
        data () {
            return {
                rules: {
                    province: [{required: true, message: '请选择省份', trigger: 'change'}],
                    city: [{required: true, message: '请选择城市', trigger: 'change'}],
                    area: [{required: true, message: '请选择区', trigger: 'change'}],
                    detail: [{required: true, message: '请填写详细地址', trigger: 'change'}]
                },
                form: {
                    province: this.province,
                    city: this.city,
                    area: this.area,
                    detail: this.detail
                },
                provinces: formatData(addressData),
                citys:{},
                areas:[]
            }
        },
        watch: {
            form: {
                handler: function (val) {
                    this.$emit('change',val);
                },
                deep: true
            },
            ifCheckForm: function (val, oldVal) {
                if (val) {
                  this.$refs.form.validate((valid) => {
                  }) ;
                }
            }
        },
        methods: {
            proChange: function (val, oldVal) {
                var data = formatData(addressData[val]);
                for (var i = 0; i < data.length; i++) {
                    this.$set(this.citys, i, data[i]);
                }
                this.form.city = '';
                this.form.area = '';
                this.form.detail = '';
            },
            cityChange: function (val, oldVal) {
                this.areas = this.form.city ? addressData[this.form.province][this.form.city] : [];
                if(oldVal){
                    this.form.area = '';
                    this.form.detail = '';
                }
            },
            areaChange (val, oldVal){
                if (oldVal) {
                    this.form.detail = '';
                }
            }
        }
    }
</script>
<style>

    .address .el-form-item {
        margin-bottom: 0 !important;
        margin-right: 0 !important;
    }
</style>
