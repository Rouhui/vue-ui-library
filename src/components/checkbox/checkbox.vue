<!--
 * @Author: jiangruohui
 * @Date: 2021-10-09 11:15:27
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-09 15:24:55
 * @Description:
 * @Description:
-->
<template>
  <label>
    <span>
       <input
          v-if="group"
          v-model="model"
          type="checkbox"
          :disabled="disabled"
          :value="label"
          @change="change">
      <input
        v-else
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
       />
    </span>
    <slot></slot>
  </label>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
import { findComponentUpward } from '@/utils/assist.js'

export default {
  name: 'iCheckbox',
  mixins: [Emitter],
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: false
    },
    trueValue: {
      type: [String, Number, Boolean],
      default: true
    },
    falseValue: {
      type: [String, Number, Boolean],
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      model: [],
      group: false,
      parent: null
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel()
      } else {
        throw Error('Value should be trueValue or falseValue.')
      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'iCheckboxGroup')

    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      // 父组件mounted也调用了updateModel，为什么重复调用
      // 为了实现动态组件，当有新的checkbox组件加入进来时，可以正确更新
      this.parent.updateModel(true)
    } else {
      this.updateModel()
    }
  },
  methods: {
    updateModel () {
      this.currentValue = this.value === this.trueValue
    },
    change (event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)

      if (this.group) {
        this.parent.change(this.model)
      } else {
        // 提供 on-change event
        this.$emit('on-change', value)
        // 用于外部表单校验
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
