<template>
  <div class="active">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "activelist",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss">
.active {
  max-height: 4.266667rem;
  z-index: 99;
  position: relative;
  width: 100%;
}
</style>
