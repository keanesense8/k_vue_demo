<template>
  <div
    class="hover:bg-grey bg-transparent w-64 mb-4 bg-grey-light h-auto rounded shadow-lg p-1 m-1"
    @click="itemClick"
  >
    <img
      class="w-full"
      src="https://cdn.vox-cdn.com/thumbor/21FHHhMWadbVrZdp8yVjgPdO7LA=/0x0:3000x1883/1200x800/filters:focal(670x127:1150x607)/cdn.vox-cdn.com/uploads/chorus_image/image/56583289/2733366.0.jpg"
      alt="Test"
    >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{code}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoItem",
  props: {
    code: String
  },
  methods: {
    itemClick() {
      // console.log("click");
      const goto = "play/" + this.code;
      this.$router.push(goto);
    }
  }
};
</script>



