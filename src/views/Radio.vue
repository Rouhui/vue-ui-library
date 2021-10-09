<!--
 * @Author: jiangruohui
 * @Date: 2021-10-09 14:57:21
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-09 16:25:54
 * @Description:
-->
<template>
  <div>
    <i-radio v-model="single">单独选项{{single}}</i-radio>
    <br/><br/>

    <i-radio-group v-model="picked">
      <i-radio label="选项1"/>
      <i-radio label="选项2"/>
      <i-radio label="选项3"/>
    </i-radio-group>
  </div>
</template>

<script>
import iRadio from '@/components/radio/radio.vue'
import iRadioGroup from '@/components/radio/radio-group.vue'

export default {
  name: 'RadioDemo',
  components: {
    iRadio,
    iRadioGroup
  },
  data () {
    return {
      single: false,
      picked: '选项1'
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
