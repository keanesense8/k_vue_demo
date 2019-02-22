<template>
  <div class="pl-20">
    <ul class="list-reset">
      <li>
        <h1>Channel:{{$route.params.id}}</h1>
      </li>
      <li>
        <div class="w-4/5">
          <video-player
            class="video-player-box vjs-big-play-centered"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
          ></video-player>
        </div>
      </li>

      <li>
        <div class="w-4/5 mt-2">
          <v-text-field label="PlayUrl" outline placeholder :value="url"></v-text-field>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// console.log("router:" + this.$router);

// console.log("init : " + this.$store.state);

export default {
  data: function() {
    // console.log("init data " + this.$store.state.drawer);
    // console.log("init data " + this.$route.path);
    // console.log("init data " + this.$route.params.id);
    let path = this.$route.path;
    let src = path.endsWith("vod")
      ? "http://61.8.173.88/vod/" + this.$route.params.id + "/prime.m3u8"
      : "http://61.8.173.88/live/hd" +
        this.$route.params.id +
        "/workflow02/workflow02-mnf.m3u8";

    let poster = path.endsWith("vod")
      ? "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-p2s7ks8k5a40s64t7qs88f2jn6-20170827130016.Medi.jpeg"
      : "https://cdn.nba.net/nba-drupal-prod/2017-08/SEO-image-NBA-logoman.jpg";
    // let playerOptions =
    return {
      playerOptions: {
        //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "true", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "application/x-mpegURL",
            // src: "http://61.8.173.54/live/hddfws/1300000/mnf.m3u8" //你的m3u8地址（必填）
            src: src
          }
        ],
        poster: poster
        //你的封面地址
        // width: document.documentElement.clientWidth,
        // notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      }
    };
    //video-player-box vjs-custom-skin
  },

  mounted() {
    this.initPlayUrl();
    // console.log("this is current player instance object", this.player);
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    url() {
      //   console.log(this.playerOptions.sources[0].src);
      //   console.log("url:" + this.playerOptions.sources[0].src);
      return this.playerOptions.sources[0].src;
    }
  },
  methods: {
    initPlayUrl() {
      //   console.log(this.playerOptions);
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
    onPlayerLoadeddata(player) {},
    onPlayerCanplay(player) {},
    onPlayerCanplaythrough(player) {},
    onPlayerPlaying(player) {},
    onPlayerTimeupdate(player) {}
  }
};
</script>

