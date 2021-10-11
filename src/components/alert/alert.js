/*
 * @Author: jiangruohui
 * @Date: 2021-10-11 14:31:10
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 14:31:11
 * @Description:
 */
import Notification from './notification.js'

let messageInstance

function getMessageInstance () {
  messageInstance = messageInstance || Notification.newInstance()
  return messageInstance
}

function notice ({ duration = 1.5, content = '' }) {
  const instance = getMessageInstance()

  instance.add({
    content: content,
    duration: duration
  })
}

export default {
  info (options) {
    return notice(options)
  }
}
