<template>
  <div class="flex flex-wrap mb-4">
    <VideoItem v-for="channel in nbaChannels" @onclick="itemClick" :code="channel.name"></VideoItem>
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
      nbaChannels: [
        {
          name: "nba1",
          url: "http://61.8.173.88/live/hdnba1/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba2",
          url: "http://61.8.173.88/live/hdnba2/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba3",
          url: "http://61.8.173.88/live/hdnba3/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba4",
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba5",
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba6",
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba7",
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8"
        },
        {
          name: "nba8",
          url: "http://61.8.173.88/live/hdnba4/workflow01/workflow01-mnf.m3u8"
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {
    itemClick() {
      console.log("aaa");
    }
  }
};
</script>

