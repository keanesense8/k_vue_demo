<template>
  <v-app id="inspire" light>
    <sidebar></sidebar>
    <topbar></topbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import topbar from "@/views/Top";
import sidebar from "@/views/Side";

export default {
  name: "App",

  components: {
    topbar,
    sidebar
  }
};
</script>
