<script setup>
import AreaQuestao from "@/components/AreaQuestao.vue";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
var id = route.params.id;

const isMounted = ref(false);

var area = null;

var progress = 0;

var escolhas = [];

function getArea() {
  axios.get("/dict.json").then((response) => {
    area = response.data[id - 1];
    progress = (100 / 6) * parseInt(id);
    console.log(progress);
    isMounted.value = true;
  });
}

onMounted(() => {
  getArea();
});

watch(
  () => route.params.id,
  (newId) => {
    isMounted.value = false;
    id = newId;
    getArea();
  }
);

function submit() {
  console.log("bruv");
}

const handleSelectedValue = (value, index) => {
  escolhas[index] = value;
  console.log(escolhas, escolhas.filter(Boolean).length)
};
</script>

<template>
  <div class="container" v-if="isMounted">
    <div class="card card-main">
      <div class="card-body">
        <p class="subtitle">Fases:</p>
        <ul class="nav nav-fases nav-fill" id="myTab">
          <li v-for="i in 6" :key="i" class="nav-item">
            <router-link
              :to="`/${i}`"
              :class="`nav-link ${i == id ? 'active' : ''}`"
              type="button"
            >
              {{ i }}
            </router-link>
          </li>
        </ul>
        <div class="fase-header">
          <h1 class="fase-title">Fase {{ id }}: {{ area.titulo }}</h1>
          <div
            class="progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="progress-bar" :style="`width: ${progress}%`"></div>
          </div>
          <img src="@/assets/imgs/07.png" class="img07" alt="" />
        </div>
        <form @submit.prevent="submit">
          <div class="perguntas">
            <AreaQuestao
              v-for="(q, i) in area.questoes"
              :key="q.titulo"
              :data="q"
              :id="i"
              @update:selectedValue="handleSelectedValue"
            />
          </div>
          <div class="buttons">
            <router-link class="btn btn-outline-primary" to="levels">
              Voltar
            </router-link>
            <button type="submit" class="btn btn-primary">Próximo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
