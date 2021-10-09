<!--
 * @Author: jiangruohui
 * @Date: 2021-10-09 11:15:27
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-09 14:09:54
 * @Description:
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
import { findComponentsDownward } from '@/utils/assist.js'

export default {
  name: 'iCheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  watch: {
    value () {
      this.updateModel(true)
    }
  },
  mounted () {
    this.updateModel(true)
  },
  methods: {
    updateModel (update) {
      this.childrens = findComponentsDownward(this, 'iCheckbox')
      if (this.childrens) {
        const { value } = this
        this.childrens.forEach(child => {
          child.model = value

          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0
            child.group = true
          }
        })
      }
    },
    change (data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('iFormItem', 'on-form-change', data)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
