<template>
  <div
    class="cursor-pointer hover:bg-red-light bg-transparent w-1/4 mb-4 bg-grey-light h-auto rounded shadow-lg p-1 m-1"
    @click="itemClick"
  >
    <img class="w-full" :src="poster" alt="Test">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-center">
        <p>{{code}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoItem",
  props: {
    code: String,
    poster: String,
    type: Number
  },
  methods: {
    itemClick() {
      console.log("click " + this.type);
      let goto = "play/" + this.code + "/" + (this.type === 1 ? "live" : "vod");
      console.log("goto:" + goto);
      this.$router.push(goto);
    }
  }
};
</script>



