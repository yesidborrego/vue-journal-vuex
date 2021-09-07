<template>
  <button :class="['btn', color]">
    <i :class="['fa', 'fa-2x', icon]"></i>
  </button>
</template>

<script>
  export default {
    name: 'Fab',
    props: {
      icon: {
        type: String,
        default: 'fa-plus'
      },
      color: {
        type: String,
        default: 'btn-primary'
      }
    }
  }
</script>

<style lang="scss" scoped>
 button {
   border-radius: 100%;
   bottom: 20px;
   height: 80px;
   position: fixed;
   right: 20px;
   width: 80px;
 }

 button:hover {
   background-color: #1d6042;
 }

 button:active {
   transform: scale(0.9);
 }
</style>