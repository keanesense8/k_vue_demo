import Vue from 'vue'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'

import 'videojs-contrib-hls'
// import 'vue-video-player/src/custom-theme.css'
// require('videojs-contrib-hls/dist/videojs-contrib-hls.js')
// require videojs style

//  require('video.js/dist/video-js.css')
//   require('vue-video-player/src/custom-theme.css')
//   require('videojs-contrib-hls/dist/videojs-contrib-hls')


Vue.use(VueVideoPlayer,
  /* {
  options: global default options,
  events: global videojs events
} */
)