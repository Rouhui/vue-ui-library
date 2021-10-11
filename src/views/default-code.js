/*
 * @Author: jiangruohui
 * @Date: 2021-10-11 11:35:33
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 13:47:36
 * @Description:
 */
const code =
`<template>
    <div>
        <input v-model="message">
        {{ message }}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                message: ''
            }
        }
    }
</script>`

export default code
