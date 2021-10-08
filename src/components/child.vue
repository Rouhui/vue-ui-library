<!--
 * @Author: jiangruohui
 * @Date: 2021-10-08 11:25:24
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-08 14:43:05
 * @Description:
-->
<template>
  <button @click="handleDispatch">触发自定义事件</button>
</template>

<script>
import Emitter from '@/mixins/emitter.js'

export default {
  name: 'child',
  mixins: [Emitter],
  data () {
    return {
    }
  },
  methods: {
    handleDispatch () {
      this.dispatch('Home', 'test', 'Hello bb')
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
