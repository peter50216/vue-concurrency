export { ref, reactive, onMounted, onUnmounted, defineComponent, computed, Ref, watchEffect, getCurrentInstance } from "vue";

// onServerPrefetch is not supported in Vue 3 so far
export const onServerPrefetch = () => {
  throw new Error('vue-concurrency SSR features are not supported in Vue 3 so far');
};
