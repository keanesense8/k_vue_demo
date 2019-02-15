<template>
  <div class="flex flex-wrap mb-4">
    <VideoItem v-for="item in liveItems" :code="item.name" :poster="item.poster" :type="item.type"></VideoItem>
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
      liveItems: [
        {
          name: "nba1",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba1/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba2",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba2/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba3",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba3/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba4",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba5",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba6",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba7",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        },
        {
          name: "nba8",
          type: 1, //0-vod 1-live
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8",
          poster:
            "https://hd-report.com/wp-content/uploads/2017/06/nba-logo-16.9.jpg"
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

