<template>
  <div class="entry-container mb-3 pointer p-2" @click="shwoEntryView">
    <!-- titulo -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">02</span>
      <span class="mx-1 fs-5">Septiembre</span>
      <span class="mx-2 fw-light">2021, viernes</span>
    </div>

    <div class="entry-decription">
      Ut cupidatat dolor velit proident dolore sit enim tempor fugiat aute duis sint laboris. Sunt sint occaecat ad elit deserunt est eu eu. Est consectetur consequat anim id proident anim commodo deserunt aliqua laborum.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    shwoEntryView() {
      this.$router.push({ name: 'entry-view', params: { id: this.id} })
    }
  }

}
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
      background-color: lighten($color: grey, $amount: 45);
    }

    .entry-decription {
      font-size: 12px;
    }
  }
</style>