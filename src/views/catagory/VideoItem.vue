<template>
  <div
    class="cursor-pointer hover:bg-red-light bg-transparent w-1/4 mb-4 bg-grey-light h-auto rounded shadow-lg p-1 m-1"
    @click="itemClick"
  >
    <img
      class="w-full"
      src="https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
      alt="Test"
    >
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



