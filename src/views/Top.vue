<template>
  <v-toolbar color="white" dense fixed clipped-left app>
    <v-toolbar-side-icon @click.stop="sideIconClick"></v-toolbar-side-icon>
    <!-- <v-icon class="mx-3 color=red">fab fa-youtube</v-icon>
    <v-toolbar-title class="mr-5 align-center cursor-pointer" @click="home">
      <span class="title">Youtube</span>
    </v-toolbar-title>-->
    <div class="w-32 ml-10 cursor-pointer" @click="home">
      <v-img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"></v-img>
    </div>

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
      <v-menu bottom offset-y>
        <v-icon class="material-icons" slot="activator" medium>notifications</v-icon>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Notifications</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>

      <v-menu bottom offset-y>
        <v-icon class="material-icons" slot="activator" medium>apps</v-icon>
        <v-card>
          <v-list>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Apps</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>

      <v-spacer></v-spacer>

      <v-menu close-on-content-click :nudge-width=200 offset-y bottom left>
        <v-avatar slot="activator" size="36px">
          <img src="@/assets/avatar/me.png" alt="me">
        </v-avatar>
        <v-card>
          <v-list>
            <v-list-tile avatar>
              <v-list-tile-content>
                <v-list-tile-title>Keane</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <!-- <v-btn class="fav ? 'red--text' : ''" icon @click="fav = !fav"> -->
                <v-btn class="red--text" icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-switch color="purple"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Enable messages</v-list-tile-title>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-action>
                <v-switch color="purple"></v-switch>
              </v-list-tile-action>
              <v-list-tile-title>Enable hints</v-list-tile-title>
            </v-list-tile>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat>Cancel</v-btn>
            <v-btn color="primary" flat>Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
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
      // console.log(this.$store.state.drawer);
      this.$store.state.drawer = !this.$store.state.drawer;
      return this.$store.state.drawer;
    },
    home() {
      this.$router.push("/");
    }
  }
};
</script>

