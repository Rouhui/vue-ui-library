<!--
 * @Author: jiangruohui
 * @Date: 2021-09-28 17:36:47
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-08 15:57:12
 * @Description:
-->
<template>
  <div class="form-demo-wrapper">
    <i-form ref="form" :model="form" :rules="rules">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="form.name" />
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="form.mail" />
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</template>

<script>
import iForm from '@/components/form/form.vue'
import iFormItem from '@/components/form/form-item.vue'
import iInput from '@/components/input/input.vue'

export default {
  name: 'FormDemo',
  components: {
    iForm,
    iFormItem,
    iInput
  },
  data () {
    return {
      form: {
        name: '',
        mail: ''
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          window.alert('提交成功')
        } else {
          window.alert('表单校验失败')
        }
      })
      // 也支持 Promise
      // this.$refs.form.validate().then((valid) => {
      //   if (valid) {
      //     window.alert('提交成功')
      //   } else {
      //     window.alert('表单校验失败')
      //   }
      // })
    },
    handleReset () {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang='scss' scoped>
.form-demo-wrapper {
  width: 400px;
}
</style>
