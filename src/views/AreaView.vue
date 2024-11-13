<script setup>
import AreaQuestao from "@/components/AreaQuestao.vue";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import * as $ from "jquery";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();
var id = route.params.id;
var ix = id - 1;

const isMounted = ref(false);
const isComplete = ref(false);
const level = ref("");

var area = null;
var levels = null;
var progress = 0;
var escolhas = [];

function getArea() {
  axios.get("levels.json").then((response) => {
    levels = response.data[ix];
  });
  axios.get("dict.json").then((response) => {
    area = response.data[ix];
    progress = (100 / 6) * parseInt(ix);
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
    isComplete.value = false;
    escolhas = [];
    id = newId;
    ix = newId - 1;
    getArea();
  }
);

function submit() {
  var sum = 0;
  escolhas.forEach((e) => {
    sum += e;
  });
  var index = ix;
  store.commit("setAcertos", { index, sum });

  levels.forEach((l) => {
    const [min, max] = l.pontos;
    if (sum >= min && (max === undefined || sum <= max)) {
      level.value = l.nome;
    }
  });

  $(".main1").hide();
  $(".main2").show();
}

const handleSelectedValue = (value, index) => {
  console.log(value);
  escolhas[index] = value;
  isComplete.value = currentLength() == area.questoes.length;
};

var currentLength = () => {
  return escolhas.filter(
    (item) => item !== null && item !== undefined && item !== ""
  ).length;
};

function next() {
  if (id < 6) {
    router.push(`/${parseInt(id) + 1}`);
  } else {
    store.dispatch("fetchAcertos");
    router.push("/end");
  }
}
</script>

<template>
  <div class="container" v-if="isMounted">
    <div class="card card-main">
      <div class="card-body">
        <p class="subtitle">Áreas:</p>
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
        <div class="main1">
          <div class="fase-header">
            <h2 class="fase-title">Área {{ id }}: {{ area.titulo }}</h2>
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
            <img :src="require(`@/assets/imgs/area${id}.png`)" class="img07" alt="" />
            <p>
              <i>
                Por favor, responda considerando os seguintes objetivos de longo
                prazo.
              </i>
            </p>
            <p>
              As opções de resposta estão organizadas de acordo com o nível de
              envolvimento com as tecnologias digitais. Escolha a opção que
              melhor reflete sua prática atual.
            </p>
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
              <router-link class="btn btn-outline-primary" to="/levels">
                Voltar
              </router-link>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="!isComplete"
              >
                Próximo
              </button>
            </div>
          </form>
        </div>
        <div class="main2" style="display: none">
          <div class="fase-header">
            <img src="@/assets/imgs/08.png" class="img08" alt="" />
            <h1 class="fase-title">Parabéns! Você concluiu a Área {{ id }}!</h1>
            <h2 class="fase-title mt-3" style="display: none">
              Nível de Competência Digital: <strong>{{ level }}</strong>
            </h2>
          </div>
          <div class="buttons m-0">
            <button class="btn btn-outline-primary" href="fase.html">
              Voltar
            </button>
            <button @click="next()" class="btn btn-primary">Próximo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
