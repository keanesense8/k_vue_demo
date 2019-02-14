<template>
  <v-toolbar color="white" dense fixed clipped-left app>
    <v-toolbar-side-icon @click.stop="sideIconClick"></v-toolbar-side-icon>
    <v-icon class="mx-3">fab fa-youtube</v-icon>
    <v-toolbar-title class="mr-5 align-center cursor-pointer" @click="home">
      <span class="title">Youtube</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-layout row style="max-width: 900px" justify-space-around>
      <v-text-field
        :append-icon-cb="() => {}"
        placeholder="Search..."
        single-line
        color="white"
        hide-details
      ></v-text-field>

      <v-icon class="material-icons" medium>search</v-icon>
      <v-spacer></v-spacer>
      <v-icon class="material-icons" medium @click>notifications</v-icon>
      <v-icon class="material-icons" medium @click>apps</v-icon>
      <v-spacer></v-spacer>
      <v-avatar slot="activator" size="36px">
        <img src="@/assets/avatar/me.png" alt="Avatar">
      </v-avatar>
    </v-layout>
  </v-toolbar>

  <!-- <v-toolbar app>
    <router-link to="/" class="text-decoration:none">
      <v-btn color="success">Home</v-btn>
    </router-link>
    <router-link to="/About">
      <v-btn color="success">About</v-btn>
    </router-link>
  </v-toolbar>-->
</template>
<script>
export default {
  methods: {
    sideIconClick() {
      console.log(this.$store.state.drawer);
      this.$store.state.drawer = !this.$store.state.drawer;
      return this.$store.state.drawer;
    },
    home() {
      this.$router.push("/nba");
    }
  }
};
</script>

