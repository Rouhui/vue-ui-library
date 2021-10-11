/*
 * @Author: jiangruohui
 * @Date: 2021-10-11 14:17:04
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 14:20:41
 * @Description: notification.js
 */
import Alert from './alert.vue'
import Vue from 'vue'

Alert.newInstance = properties => {
  const props = properties || {}

  const Instance = new Vue({
    data: props,
    render (h) {
      return h(Alert, {
        props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)

  const alert = Instance.$children[0]

  return {
    add (noticeProps) {
      alert.add(noticeProps)
    },
    remove (name) {
      alert.remove(name)
    }
  }
}

export default Alert
