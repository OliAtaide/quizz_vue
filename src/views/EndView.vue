<template>
  <div class="container">
    <div class="card card-main">
      <div class="card-body">
        <div class="fase-header">
          <img src="@/assets/imgs/09.png" class="img09 w-25" alt="" />
          <h3 class="fase-title">Parabéns! Você concluiu o quiz!</h3>
          <LevelCard v-if="isTotal" :data="data" />
          <div class="buttons">
            <router-link
              to="/6"
              class="btn btn-outline-primary"
              href="fase2.html"
            >
              Voltar
            </router-link>
            <a class="btn btn-primary" href="#"> Finalizar </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LevelCard from "@/components/LevelCard.vue";
import { ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const total = store.state.current_level;

const isTotal = ref(false);

var data = null;

watch(
  () => store.state.current_level,
  (newData) => {
    isTotal.value = true;
    data = newData;
  }
);
</script>
