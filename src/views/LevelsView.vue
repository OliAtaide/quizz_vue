<template>
  <div class="container">
    <div class="card card-main">
      <div class="card-body">
        <h6>Autodiagnóstico sobre Competências Digitais</h6>
        <p>
          De acordo com o quadro DigCompEdu, podemos classificar os níveis de
          competências digitais dos docentes em:
        </p>
        <div class="row row-levels">
          <LevelCard v-for="n in niveis" :key="n.titulo" :data="n" />
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

<script setup>
import LevelCard from "@/components/LevelCard.vue";

const niveis = [
  {
    imagem: "01",
    titulo: "Recém-chegados",
    texto:
      "reconhecem o potencial das tecnologias digitais para melhorar a prática pedagógica e profissional e usam-nas majoritariamente para preparação de aulas, administração ou comunicação institucional.",
  },
  {
    imagem: "04",
    titulo: "Especialistas",
    texto:
      "selecionam tecnologias digitais propositadamente para situações específicas e procuram compreender as vantagens e desvantagens de diferentes estratégias digitais.",
  },
  {
    imagem: "02",
    titulo: "Exploradores",
    texto:
      "começaram a usar tecnologias digitais em algumas áreas de competência digital, sem, no entanto, seguir uma abordagem abrangente ou consistente.",
  },
  {
    imagem: "05",
    titulo: "Líderes",
    texto:
      "contam com um amplo repertório de estratégias digitais, do qual sabem escolher a mais adequada para determinada situação.",
  },
  {
    imagem: "03",
    titulo: "Integradores",
    texto:
      "utilizam as tecnologias digitais de forma criativa para melhorar diversos aspectos do seu envolvimento profissional.",
  },
  {
    imagem: "06",
    titulo: "Pioneiros",
    texto:
      "preocupam-se com as limitações ou desvantagens dessas práticas e são levados pelo impulso de inovar cada vez mais a Educação.",
  },
];
</script>
