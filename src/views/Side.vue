<template>
  <v-navigation-drawer :value="drawer" fixed clipped app>
    <v-list dense>
      <v-list-tile v-for="(item , index) in items" :key="item.text" @click="catagoryAction(index)">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>

      <v-list-tile @click="setting">
        <v-list-tile-action>
          <v-icon color="grey darken-1">settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: "fa-baseball-ball",
        text: "NBA LIVE",
        routerto: "/nba"
      }, {
        icon: "ondemand_video",
        text: "Vod",
        routerto: "/vod"
      }

      // { icon: "history", text: "Play Demo", routerto: "/play" }
    ]
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set() {}
    }
  },
  methods: {
    catagoryAction(index) {
      // console.log(this.items[index].routerto);
      this.$router.push(this.items[index].routerto);
    },
    setting() {
      this.$router.push("about");
    }
  }
};
</script>
<style>
</style>

