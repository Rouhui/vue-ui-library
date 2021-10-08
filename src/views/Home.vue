<!--
 * @Author: jiangruohui
 * @Date: 2021-09-28 17:36:47
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-08 15:51:22
 * @Description:
-->
<template>
  <div class="home">
    <p>Emitter实例</p>
    <child/>
  </div>
</template>

<script>
import child from '@/components/child'

export default {
  name: 'Home',
  components: { child },
  mounted () {
    this.$on('test', text => {
      window.alert(text)
    })
  },
  method: {
    handleEvent (text) {
      console.log(text)
    }
  }
}
</script>
