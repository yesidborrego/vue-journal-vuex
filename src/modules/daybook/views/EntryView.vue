<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">06</span>
      <span class="mx-1 fs-3">Septiembre</span>
      <span class="mx-2 fs-4 fw-light">2021, lunes</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary">
        Upload picture
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr/>

  <div class="d-flex flex-column px-3 h-75">
    <textarea
      placeholder="What happened to today?"
    ></textarea>
  </div>

  <img
    src="https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
    alt="entry-picture"
  >
  <Fab
    color="btn-info"
    icon="fa-save"
  />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'EntryVue',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  components: {
    Fab: defineAsyncComponent( () => import('../components/Fab.vue') )
  }
}
</script>

<style lang="scss" scoped>
  textarea {
    border: none;
    font-size: 20px;
    height: 100%;

    &:focus {
      outline: none;
    }
  }

  img {
    bottom: 150px;
    box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
    position: fixed;
    right: 20px;
    width: 200px;
  }

</style>