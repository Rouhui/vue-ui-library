<!--
 * @Author: jiangruohui
 * @Date: 2021-10-11 14:09:03
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 14:32:34
 * @Description:
-->
<template>
  <div>
    <button @click="handleOpen1">打开提示 1</button>
    <button @click="handleOpen2">打开提示 2</button>
  </div>
</template>
<script>
export default {
  name: 'AlertDemo',
  methods: {
    handleOpen1 () {
      this.$Alert.info({
        content: '我是提示信息 1'
      })
    },
    handleOpen2 () {
      this.$Alert.info({
        content: '我是提示信息 2',
        duration: 3
      })
    }
  }
}
</script>
