<!--
 * @Author: jiangruohui
 * @Date: 2021-10-14 16:29:59
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-14 17:02:14
 * @Description:
-->
<template>
  <i-tree :data="data" :show-checkbox="true" @on-toggle-expand="handleExpand" @on-check-change="handleChecked"></i-tree>
</template>

<script>
import iTree from '@/components/tree/tree.vue'

export default {
  name: 'TreeDemo',
  components: { iTree },
  data () {
    return {
      data: [{
        title: 'parent 1',
        expand: true,
        children: [
          {
            title: 'parent 1-1',
            expand: true,
            children: [
              {
                title: 'leaf 1-1-1'
              },
              {
                title: 'leaf 1-1-2'
              }
            ]
          },
          {
            title: 'parent 1-2',
            children: [
              {
                title: 'leaf 1-2-1'
              },
              {
                title: 'leaf 1-2-1'
              }
            ]
          }
        ]
      }]
    }
  },
  methods: {
    handleExpand (node) {
      console.log(node)
    },
    handleChecked (node) {
      console.log(node)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
