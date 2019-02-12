<template>
  <v-app>
    <v-toolbar app>
      <router-link to="/" class="text-decoration:none">
         <v-btn color="success">Success</v-btn>
      </router-link>  
      <router-link to="/About">
          <v-btn color="success">Success</v-btn>
       </router-link>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
