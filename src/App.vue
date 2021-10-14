<!--
 * @Author: jiangruohui
 * @Date: 2021-10-08 14:34:13
 * @LastEditors: jiangruohui
 * @LastEditTime: 2021-10-14 16:30:18
 * @Description:
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/form">Form</router-link>
      <router-link to="/checkbox">Checkbox</router-link>
      <router-link to="/radio">Radio</router-link>
      <router-link to="/display">Display</router-link>
      <router-link to="/alert">Alert</router-link>
      <router-link to="/table-render">TableRender</router-link>
      <router-link to="/table-slot">TableSlot</router-link>
      <router-link to="/tree">Tree</router-link>
    </div>
    <div id="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}

#nav {
  padding: 30px;
  width: 20vw;

  a {
    display: block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#container {
  padding: 30px;
  width: 80vw;
  text-align: left;
}
</style>
