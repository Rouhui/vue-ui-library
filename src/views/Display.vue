<!--
 * @Author: jiangruohui
 * @Date: 2021-10-11 11:34:58
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 13:45:17
 * @Description:
-->
<template>
  <div>
    <h3>动态渲染 .vue 文件的组件—— Display</h3>

    <i-display :code="code"></i-display>
  </div>
</template>
<script>
import iDisplay from '@/components/display/display.vue'
import defaultCode from './default-code.js'

export default {
  components: { iDisplay },
  data () {
    return {
      code: defaultCode
    }
  }
}
</script>
