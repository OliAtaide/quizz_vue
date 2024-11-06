<template>
  <div class="container">
    <div class="card card-main">
      <div class="card-body">
        <div class="fase-header">
          <img src="@/assets/imgs/09.png" class="img09 w-25" alt="" />
          <h3 class="fase-title">
            Parabéns! Você concluiu o seu autodiagnostico!
          </h3>
          <LevelCard v-if="isTotal" :data="data" />
          <h3>
            Obrigado por sua contribuição. Você pode imprimir seu relatório
            pressionando o botão "Imprimir".
          </h3>
          <div class="buttons">
            <router-link
              to="/6"
              class="btn btn-outline-primary"
              href="fase2.html"
            >
              Voltar
            </router-link>
            <router-link class="btn btn-primary" to="/result"> Imprimir </router-link>
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
