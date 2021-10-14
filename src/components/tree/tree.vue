<!--
 * @Author: jiangruohui
 * @Date: 2021-10-14 16:32:52
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-14 16:47:26
 * @Description:
-->
<template>
  <div>
    <TreeNode
      v-for="(item, index) in cloneData"
      :key="index"
      :data="item"
      :show-checkbox="showCheckbox"
    ></TreeNode>
  </div>
</template>

<script>
import TreeNode from './node.vue'
import { deepCopy } from '@/utils/assist'

export default {
  name: 'iTree',
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      cloneData: []
    }
  },
  created () {
    this.rebuildCode()
  },
  methods: {
    rebuildCode () {
      this.cloneData = deepCopy(this.data)
    },
    emitEvent (eventName, data) {
      this.$emit(eventName, data, this.cloneData)
    }
  }
}
</script>

<style lang='scss' scoped>
</style>
