<template>
  <a class="swiper-tab-item"
     :style="$parent.value === id ? activeStyle : {}"
     @click="onItemClicked">
    <div class="swiper-tab-item-icon"><slot name="icon"></slot></div>
    <div class="swiper-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
  /**
   * swiper-tab-item
   * @desc 搭配 tab 使用
   * @param {Number} id - 选中的item的索引值
   * @param {slot} [icon] - icon 图标
   * @param {slot} - 文字
   *
   * @example
   * <swiper-tab-item>
   *   <img slot="icon" src="http://placehold.it/100x100">
   *   前端
   * </swiper-tab-item>
   */
  export default {
    name: 'swiper-tab-item',
    computed: {
      activeStyle () {
        return {
          color: this.$parent.activeColor,
          borderColor: this.$parent.activeColor,
          borderWidth: this.$parent.lineWidth,
          borderBottomStyle: 'solid'
        }
      }
    },
    data () {
      return {
        id: (this.$parent.$children.length || 1) - 1
      }
    },
    mounted (){
      this.bindEvent();
    },
    methods: {
      bindEvent () {
        //console.log(this.$el);
      },
      onItemClicked () {
        console.log('1111');
        this.$parent.$emit('input', this.id)
      }
    }
  }
</script>

<style lang="scss">
  .swiper-tab-item {
    text-decoration: none;
    text-align: center;
  .swiper-tab-item-icon {
    margin: 0 auto 5px;
  }
  .swiper-tab-item-label {
    margin: 0 auto 10px;
    line-height: 18px;
  }
  }
</style>
