<template>
  <NavBarTestView />
  <NavBarView />
  <hr>
  <router-view />
</template>

<script>
import NavBarView from "./components/NavBarView.vue";
import NavBarTestView from "@/components/NavBarTestView.vue";

export default {
  name: 'App',
  components: {
    NavBarTestView,
    NavBarView,
  }
}
</script>

<style>
</style>
