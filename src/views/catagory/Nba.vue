<template>
   <v-container grid-list-md text-xs-center justify-space-between>
    <v-layout >
      <v-flex xs12>
          <videoPlayer class="vjs-custom-skin"  ref="videoPlayer">
            
          </videoPlayer>
      </v-flex>
      <v-flex xs12>
        
        <v-card dark >
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet,
            </p>
          </div>
          </div>
          

        </v-card>
        
      </v-flex>
     
     
    </v-layout>
  </v-container>
</template>
<script>
import videoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  components:{
    videoPlayer
  }
};
</script>

