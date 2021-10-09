<!--
 * @Author: jiangruohui
 * @Date: 2021-10-09 14:57:28
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-09 16:18:29
 * @Description:
-->
<template>
  <label>
    <span>
       <input
          type="radio"
          :disabled="disabled"
          :checked="currentValue"
          @change="change">
    </span>
    <slot>{{ label }}</slot>
  </label>
</template>

<script>
import Emitter from '@/mixins/emitter.js'
import { findComponentUpward } from '@/utils/assist.js'

export default {
  name: 'iRadio',
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
      group: false,
      parent: null
    }
  },
  watch: {
    value (val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateValue()
      } else {
        throw Error('Value should be trueValue or falseValue.')
      }
    }
  },
  mounted () {
    this.parent = findComponentUpward(this, 'iRadioGroup')

    if (this.parent) {
      this.group = true
    }

    if (this.group) {
      this.parent.updateValue(true)
    } else {
      this.updateValue()
    }
  },
  methods: {
    updateValue () {
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
        if (this.label !== undefined) {
          this.parent.change({
            value: this.label,
            checked: this.value
          })
        }
      } else {
        this.$emit('on-change', value)
        this.dispatch('iFormItem', 'on-form-change', value)
      }
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
