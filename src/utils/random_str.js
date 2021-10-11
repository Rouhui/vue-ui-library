/*
 * @Author: jiangruohui
 * @Date: 2021-10-11 11:24:32
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-11 11:24:33
 * @Description:
 */
// 生成随机字符串
export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length
  let str = ''
  for (let i = 0; i < len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return str
}
