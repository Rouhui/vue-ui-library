/*
 * @Author: jiangruohui
 * @Date: 2021-10-09 09:31:56
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-14 16:37:19
 * @Description:
 */

/**
 * @method: findComponentUpward
 * @description: 由一个组件，向上找到最近的指定组件
 * @param {object} context
 * @param {string} componentName
 * @returns
 */
export const findComponentUpward = (context, componentName) => {
  let parent = context.$parent
  let name = parent.$options.name

  while (parent && (!name || [componentName].indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
/**
 * @method: findComponentsUpward
 * @description: 由一个组件，向上找到所有的指定组件
 * @param {object} context
 * @param {string} componentName
 * @returns
 */
export const findComponentsUpward = (context, componentName) => {
  const parents = []
  const parent = context.$parent

  if (parent) {
    if (parent.$options.name === componentName) parents.push(parent)
    return parents.concat(findComponentsUpward(parent, componentName))
  } else {
    return []
  }
}

/**
 * @method: findComponentDownward
 * @description: 由一个组件，向下找到最近的指定组件。 这个描述似乎有点问题，因为采用的是深度优先遍历，根据代码描述看，第一个找到的并不是层级离自身最近的组件
 * @param {object} context
 * @param {string} componentName
 * @returns
 */
export const findComponentDownward = (context, componentName) => {
  const children = context.$children
  let child = null

  if (children.length) {
    for (const ch of children) {
      const name = ch.$options.name

      if (name === componentName) {
        child = ch
        break
      } else {
        child = findComponentDownward(ch, componentName)
        if (child) break
      }
    }
  }
  return child
}

/**
 * @method: findComponentsDownward
 * @description: 由一个组件，向下找到所有指定的组件
 * @param {object} context
 * @param {string} componentName
 * @returns
 */
export const findComponentsDownward = (context, componentName) => {
  return context.$children.reduce((components, child) => {
    if (child.$options.name === componentName) components.push(child)
    const foundChilds = findComponentsDownward(child, componentName)
    return components.concat(foundChilds)
  }, [])
}

/**
 * @method: findBrothersComponents
 * @description: 由一个组件，找到指定组件的兄弟组件
 * @param {object} context
 * @param {string} componentName
 * @param {boolean} exceptMe 是否排除自己
 * @returns
 */
export const findBrothersComponents = (context, componentName, exceptMe = true) => {
  const res = context.$parent.$children.filter(item => {
    return item.$options.name === componentName
  })
  // Vue.js 在渲染组件时，都会给每个组件加一个内置的属性 _uid，这个 _uid 是不会重复的，借此我们可以从一系列兄弟组件中把自己排除掉。
  const index = res.findIndex(item => item._uid === context._uid)
  if (exceptMe) res.splice(index, 1)
  return res
}

function typeOf (obj) {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

export const deepCopy = (data) => {
  const t = typeOf(data)
  let o

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]))
    }
  } else if (t === 'object') {
    for (const i in data) {
      o[i] = deepCopy(data[i])
    }
  }
  return o
}
