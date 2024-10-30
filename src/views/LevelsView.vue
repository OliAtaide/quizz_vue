<script setup>
import LevelCard from "@/components/LevelCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const isMounted = ref(false);

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
</script>
<template>
  <div class="container" v-if="isMounted">
    <div class="card card-main">
      <div class="card-body">
        <h6>Autodiagnóstico sobre Competências Digitais</h6>
        <p>
          De acordo com o quadro DigCompEdu, podemos classificar os níveis de
          competências digitais dos docentes em:
        </p>
        <div class="row row-levels">
          <div class="col-sm-6" v-for="n in niveis" :key="n.titulo" >
            <LevelCard :data="n" />
          </div>
        </div>
        <div class="buttons">
          <router-link to="/" class="btn btn-outline-primary" href="index.html">
            Voltar
          </router-link>
          <router-link to="/1" class="btn btn-primary"> Próximo </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
