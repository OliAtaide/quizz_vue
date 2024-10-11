<script setup>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <router-view />
  <FooterBar />
</template>

<style lang="scss" src="@/assets/style.scss"></style>
