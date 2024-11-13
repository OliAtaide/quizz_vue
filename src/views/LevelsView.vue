<script setup>
import LevelCard from "@/components/LevelCard.vue";
import router from "@/router";
import axios from "axios";
import * as $ from "jquery";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isMounted = ref(false);
const isFilled = ref(false);

var niveis = [];

function getArea() {
  axios.get("total.json").then((response) => {
    niveis = response.data;
    isMounted.value = true;
  });
}

onMounted(() => {
  getArea();
});

function selectLevel(n, i) {
  store.commit("setAutodiag", niveis[i].nome);
  isFilled.value = true;
  $(".card-level").removeClass("card-level-active");
  $(".card-level-" + i).addClass("card-level-active");
}

function next() {
  router.push("/1");
}
</script>
<template>
  <div class="container" v-if="isMounted">
    <div class="card card-main">
      <div class="card-body">
        <h5 class="fw-bold">Autodiagnóstico sobre Competências Digitais</h5>
        <p>
          De acordo com o quadro DigCompEdu, podemos classificar os níveis de
          competências digitais dos docentes em:
        </p>
        <div class="row row-levels">
          <div class="col-sm-6" v-for="(n, i) in niveis" :key="n.titulo">
            <LevelCard :data="n" :index="i" @click="selectLevel(n, i)" />
          </div>
        </div>
        <h5 class="fw-bold mt-3">
          Como você avalia atualmente sua competência digital?
        </h5>
        <p>
          Atribua um nível de A1 a C2, sendo que A1 é o nível inicial e C2 o
          mais avançado. Volte para o inicio da tela e Clique em um dos níveis
          que corresponde ao se estado atual.
        </p>
        <div class="buttons">
          <router-link to="/" class="btn btn-outline-primary" href="index.html">
            Voltar
          </router-link>
          <button @click="next()" class="btn btn-primary" :disabled="!isFilled">
            Próximo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
