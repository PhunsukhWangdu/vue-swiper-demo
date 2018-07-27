<template>
  <div id="app">
    <!-- 通过拆解v-model语法糖实现双向传递 -->
    <swiper-tab :value="selected" @input="changeSelected" activeColor="#1d98bd">
      <swiper-tab-item v-for="(item, index) in tabList" :key="index">
        {{item.itemName}}
      </swiper-tab-item>
    </swiper-tab>
    <h3>请选择移动端调试模式或者真机调试</h3>
    <!-- 通过绑定‘fixBottom’实现固定在底部的tab -->
    <swiper-tab v-model="selectedFixed" fixBottom>
      <swiper-tab-item v-for="(item, index) in fixedList" :key="index">
        <span slot="icon">{{item.icon}}</span>
        {{item.itemName}}
      </swiper-tab-item>
    </swiper-tab>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        selected: 0, // 自定义的变量用于存放当前选中的tab的索引值
        selectedFixed: 0,
        tabList: [
          {itemName: '首页'},
          {itemName: '推荐'},
          {itemName: 'Android'},
          {itemName: '前端'},
          {itemName: '后端'},
          {itemName: 'iOS'},
          {itemName: '产品'},
          {itemName: '人工智能'},
          {itemName: '设计'}
        ],
        fixedList: [
          {itemName: '首页', icon: 'icon1'},
          {itemName: '沸点', icon: 'icon2'},
          {itemName: '发现', icon: 'icon3'},
          {itemName: '我', icon: 'icon4'}
        ]
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
