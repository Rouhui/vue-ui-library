<!--
 * @Author: jiangruohui
 * @Date: 2021-10-09 14:57:36
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-09 16:25:34
 * @Description:
-->
<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Emitter from '@/mixins/emitter'
import { findComponentsDownward } from '@/utils/assist.js'

export default {
  name: 'iRadioGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number]
    }
  },
  data () {
    return {
      currentValue: this.value,
      children: []
    }
  },
  watch: {
    value () {
      if (this.currentValue !== this.value) {
        this.currentValue = this.value
        this.$nextTick(() => {
          this.updateValue()
        })
      }
    }
  },
  mounted () {
    this.updateValue()
  },
  methods: {
    updateValue () {
      this.children = findComponentsDownward(this, 'iRadio')
      if (this.children) {
        this.children.forEach(child => {
          child.currentValue = this.currentValue === child.label
          child.group = true
        })
      }
    },
    change (data) {
      const { value } = data
      this.currentValue = data
      this.$emit('input', value)
      this.$emit('on-change', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
