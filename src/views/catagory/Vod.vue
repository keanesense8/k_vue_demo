<template>
  <div class="flex flex-wrap mb-4">
    <VideoItem v-for="item in items" :code="item.name" :poster="item.poster"  :type="item.type"></VideoItem>
  </div>
</template>
   

<script>
import VideoItem from "@/views/catagory/VideoItem";

export default {
  components: {
    VideoItem
  },
  data: () => {
    return {
      items: [
        {
          name: "vod1",
          type: 0,//0-vod 1-live
          url: "http://61.8.173.88/vod/vod1/prime.m3u8",
          poster:"https://www.openpr.com/images/articles/R/b/Rb1562129_g.jpg"
        },
        {
          name: "vod2",
          type: 0,//0-vod 1-live
          url: "http://61.8.173.88/vod/vod1/prime.m3u8",
          poster:"https://www.openpr.com/images/articles/R/b/Rb1562129_g.jpg"
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {
    
  }
};
</script>

