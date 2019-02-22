<template>
  <div class="flex flex-wrap mb-4">
    <VideoItem v-for="item in items" :code="item.name" :poster="item.poster"  :type="item.type"></VideoItem>
  </div>
  <!-- <v-container>
    <v-layout row wrap>
      <v-flex xs12>
      
        <v-card v-for="i in 20" >
          <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
              <div>Located two hours south of Sydney in the
                <br>Southern Highlands of New South Wales, ...
              </div>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="orange">Share</v-btn>
            <v-btn flat color="orange">Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container> -->
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
          type: 0, //0-vod 1-live
          url: "http://61.8.173.88/vod/vod1/prime.m3u8",
          poster: "https://www.openpr.com/images/articles/R/b/Rb1562129_g.jpg"
        },
        {
          name: "vod2",
          type: 0, //0-vod 1-live
          url: "http://61.8.173.88/vod/vod1/prime.m3u8",
          poster: "https://www.openpr.com/images/articles/R/b/Rb1562129_g.jpg"
        }
      ]
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

