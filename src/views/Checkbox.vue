<!--
 * @Author: jiangruohui
 * @Date: 2021-10-09 10:24:55
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-09 14:41:34
 * @Description:
-->
<template>
  <div>
    <i-checkbox v-model="single">单独选项{{single}}</i-checkbox>
    <br/><br/>

    <i-checkbox-group v-model="multiple">
      <i-checkbox label="option1">选项 1</i-checkbox>
      <i-checkbox label="option2">选项 2</i-checkbox>
      <i-checkbox label="option3">选项 3</i-checkbox>
      <i-checkbox label="option4">选项 4</i-checkbox>
    </i-checkbox-group>
    <br/>
    <span>Checked Value: {{ multiple }}</span>

    <br/><br/>
    <span>表单内使用</span>
    <i-form ref="form" :model="form" :rules="rules">
      <i-form-item label="多选框" prop="single">
        <i-checkbox v-model="form.single">{{form.single}}</i-checkbox>
      </i-form-item>
      <i-form-item label="多选框组" prop="multiple">
        <i-checkbox-group v-model="form.multiple">
          <i-checkbox label="option1">选项 1</i-checkbox>
          <i-checkbox label="option2">选项 2</i-checkbox>
          <i-checkbox label="option3">选项 3</i-checkbox>
          <i-checkbox label="option4">选项 4</i-checkbox>
        </i-checkbox-group>
      </i-form-item>
    </i-form>
  </div>
</template>

<script>
import iCheckbox from '@/components/checkbox/checkbox.vue'
import iCheckboxGroup from '@/components/checkbox/checkbox-group.vue'
import iForm from '@/components/form/form.vue'
import iFormItem from '@/components/form/form-item.vue'

export default {
  name: 'CheckboxDemo',
  components: {
    iCheckbox,
    iCheckboxGroup,
    iForm,
    iFormItem
  },
  data () {
    return {
      single: false,
      multiple: ['option1', 'option3'],
      form: {
        single: true,
        multiple: ['option1']
      },
      rules: {
        multiple: [
          { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
</style>
