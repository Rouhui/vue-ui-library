<!--
 * @Author: jiangruohui
 * @Date: 2021-10-08 10:26:53
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-08 15:56:59
 * @Description:
-->
<template>
  <form>
    <slot />
  </form>
</template>

<script>
import Emitter from '@/mixins/emitter'

export default {
  name: 'iForm',
  mixins: [Emitter],
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      fields: [] // 缓存所有 FormItem 实例
    }
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
    })
    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
    })
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    // 公开方法：全部校验数据，支持 Promise
    validate (callback) {
      return new Promise(resolve => {
        let valid = true
        let count = 0
        this.fields.forEach(field => {
          field.validate('', errors => {
            if (errors) {
              valid = false
            }
            if (++count === this.fields.length) {
              // 全部完成
              resolve(valid)
              if (typeof callback === 'function') {
                callback(valid)
              }
            }
          })
        })
      })
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
