<!--
 * @Author: jiangruohui
 * @Date: 2021-10-12 17:14:20
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-12 17:37:35
 * @Description:
-->
<template>
  <div>
    <i-tabel :columns="columns" :data="data"></i-tabel>
  </div>
</template>

<script>
import iTabel from '@/components/table-render/table.vue'

export default {
  name: 'TableDemo',
  components: { iTabel },
  data () {
    return {
      columns: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '出生日期',
          key: 'birthday',
          render: (h, { row, columns, index }) => {
            const { birthday } = row
            const date = new Date(birthday)
            return h('span', date.toDateString())
          }
        },
        {
          title: '地址',
          key: 'address'
        },
        {
          title: '操作'
        }
      ],
      data: [
        {
          id: 1,
          name: '王小明',
          age: 18,
          birthday: 1634031339483,
          address: '北京市朝阳区芍药居'
        },
        {
          id: 2,
          name: '张小刚',
          age: 25,
          birthday: 1634031339483,
          address: '北京市海淀区西二旗'
        },
        {
          id: 3,
          name: '李小红',
          age: 30,
          birthday: 1368316800000,
          address: '上海市浦东新区世纪大道'
        },
        {
          id: 4,
          name: '周小伟',
          age: 26,
          birthday: 800236800000,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
