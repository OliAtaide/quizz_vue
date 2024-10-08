<script setup>
import { onBeforeMount } from "vue";
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
import store from "./store";


</script>

<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<style lang="scss" src="@/assets/style.scss"></style>
