import SwiperTab from './src/SwiperTab.vue';
import SwiperTabItem from './src/SwiperTabItem.vue';

const install = function (Vue, config = {}) {
  Vue.component(SwiperTab.name, SwiperTab);
  Vue.component(SwiperTabItem.name, SwiperTabItem);
};

export default {
  install
}