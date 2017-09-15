<template>
  <v-toolbar fixed dark class="cyan">
    <v-toolbar-title  class="mr-4">
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        TabTracker
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'songs'})"
        flat
        dark>
        Browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'login'})"
        flat dark>
        Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        @click="navigateTo({name: 'register'})"
        flat dark>
        Sign Up
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        @click="logout"
        flat dark>
        Log Out
      </v-btn>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      navigateTo (route) {
        this.$router.push(route)
      },
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'root'
        })
      }
    }
  }
</script>

<style scoped>
  .home {
    cursor: pointer;
  }
  .home:hover {
    color: lightgray;
  }
</style>
