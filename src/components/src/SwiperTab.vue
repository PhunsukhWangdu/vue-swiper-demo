<template>
  <div class="swiper-tab">
    <span>{{isMoveLeft}}</span>
    <div class="swiper-tab-list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import './utils/requestAnimationFrame';

  export default {
    name: 'swiper-tab',
    props: {
      lineWidth: {
        type: Number,
        default: 1
      },
      activeColor: {
        type: String,
        default: 'red'
      },
      fixBottom: {
        type: Boolean,
        default: false
      },
      value: {},

      // 近似等于超出边界时最大可拖动距离(px);
      additionalX: {
        type: Number,
        default: 50
      },
      // 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长);
      reBoundExponent: {
        type: Number,
        default: 10
      },
      // 灵敏度(惯性滑动时的灵敏度,值越小，阻力越大),可近似认为速度减为零所需的时间(ms);
      sensitivity: {
        type: Number,
        default: 1000
      },
      // 回弹过程duration;
      reBoundingDuration: {
        type: Number,
        default: 360
      }
    },
    computed: {
      isMoveLeft () {
        return this.currentX - this.lastX;
      }
    },
    data () {
      return {
        initialFrame: 0,
        startX: 0,
        lastX: 0,
        currentX: 0,
      }
    },
    mounted (){
      this.bindEvent();
    },
    methods: {
      bindEvent () {
        this.$el.addEventListener('touchstart', this.handleTouchStart, false);
        this.$el.addEventListener('touchmove', this.handleTouchMove, false);
        //this.$el.addEventListener('touchend', this.handleTouchEnd, false);
      },
      handleTouchStart (e) {
        cancelAnimationFrame(this.initialFrame);
        this.lastX = e.touches[0].clientX;
      },
      handleTouchMove (e) {
        this.touching = true;
        this.startX = this.lastX;
        this.currentX = e.touches[0].clientX;
        this.endMoveTime = event.timeStamp;
        console.log(e);
      },
      handleTouchEnd (e) {
        
      }
    }
  }
</script>

<style lang="scss">
.swiper-tab {
  width: 100%;
  overflow: hidden;
  background-color: rgba($color: #fff, $alpha: 0.8);
  display: flex;
  border-bottom: 1px solid #ddd;
  .swiper-tab-list {
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    padding: 5px 10px 0;
    min-width: 100%;
    .swiper-tab-item {
      flex-grow: 1;
      font-size: 14px;
      text-align: center;
      padding: 0 5px;
      &:not(:first-child) {
         margin-left: 15px;
       }
    }
  }
}

</style>