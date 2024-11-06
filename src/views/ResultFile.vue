<script setup>
import axios from "axios";
import * as $ from "jquery";
import { ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();

const acertos = store.state.acertos;

const isMounted = ref(false);

var titles = [];

var total = [16, 12, 16, 12, 12, 20];

function getAreas() {
  axios.get("dict.json").then((response) => {
    let data = response.data;

    data.forEach((d) => {
      titles.push(d.titulo);
    });

    console.log(titles, total);
    isMounted.value = true;
  });
}

getAreas();

watch(
  () => isMounted.value,
  () => {
    print($(".result"));
  }
);
</script>

<template>
  <div class="result" v-if="isMounted">
    <h3 class="text-center">DigCompEdu Check-In Brasil MetaRed - Resultados</h3>
    <h6>Obrigado por sua contribuição!</h6>
    <h6>Segue abaixo o quadro com as pontuações:</h6>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Área</th>
          <th>Pontuação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(d, i) in acertos" :key="d">
          <th>Área {{ i + 1 }}: {{ titles[i] }}</th>
          <th>{{ d }} / {{ total[i] }}</th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Pontuação total</th>
          <th>{{ acertos.reduce((a, b) => a + b, 0) }} / 88</th>
        </tr>
      </tfoot>
    </table>

    <h6>Se a sua pontuação está abaixo de 20 é um(a) Recém-chegado(a) (A1)</h6>
    <p>
      Isto significa que tem uma oportunidade para começar a melhorar a
      utilização que faz das tecnologias digitais para o ensino. O feedback
      deste questionário identificou várias ações que pode tentar. Selecione uma
      ou duas para começar durante o próximo período letivo, concentrando-se em
      melhorar significativamente as suas estratégias de ensino. Ao fazer isso,
      estará a movimentar-se para a próxima etapa da competência digital: o
      nível do(a) Explorador(a).
    </p>

    <h6>Se a sua pontuação está entre 20 e 33 é um(a) Explorador(a) (A2)</h6>
    <p>
      Isto significa que tem consciência do potencial das tecnologias digitais e
      está interessado(a) em explorá-las para melhorar a prática pedagógica e
      profissional. Já começou a usar tecnologias digitais em algumas áreas e
      irá beneficiar de uma prática mais consistente. Pode aumentar a sua
      competência através da colaboração e troca com colegas e da ampliação do
      seu repertório de práticas e habilidades digitais. Isso o(a) levará ao
      próximo nível de competência digital: o(a) Integrador(a).
    </p>

    <h6>Se a sua pontuação está entre 34 e 49 é um(a) Integrador(a) (B1)</h6>
    <p>
      Isto significa que experimenta tecnologias digitais numa variedade de
      contextos e para uma série de propósitos, integrando-as em muitas das suas
      práticas. Utiliza-as criativamente para melhorar diversos aspectos do seu
      envolvimento profissional e está disposto(a) a expandir o seu repertório
      de práticas. Beneficiará se melhorar a compreensão sobre que ferramentas
      funcionam melhor em que situações e sobre a adequação de tecnologias
      digitais a métodos e estratégias pedagógicas. Tente dar a si mesmo(a) mais
      algum tempo para experimentar e refletir, complementando-o com incentivo
      colaborativo e troca de conhecimento, para chegar ao próximo nível: o(a)
      Especialista (B2).
    </p>

    <h6>Se a sua pontuação está entre 50 e 65 é um(a) Especialista (B2)</h6>
    <p>
      Isto significa que usa uma variedade de tecnologias digitais com
      confiança, criatividade e espírito crítico para melhorar as suas
      atividades profissionais. Seleciona tecnologias digitais propositadamente
      para situações específicas e procura compreender as vantagens e
      desvantagens de diferentes estratégias digitais. É curioso(a) e aberto(a)
      a novas ideias, sabendo que há muitas coisas que ainda não experimentou.
      Utiliza a experimentação como um meio de expandir, estruturar e consolidar
      o seu repertório de estratégias. Partilhe o seu conhecimento com outros
      docentes e continue a desenvolver de forma crítica as suas estratégias
      digitais para alcançar o nível de Líder (C1).
    </p>

    <h6>Se a sua pontuação está entre 66 e 80 é um(a) Líder (C1)</h6>
    <p>
      Isto significa que tem uma abordagem consistente e abrangente no que toca
      à utilização de tecnologias digitais para melhorar práticas pedagógicas e
      profissionais. Conta com um amplo repertório de estratégias digitais, do
      qual sabe escolher a mais adequada para qualquer situação concreta.
      Reflete continuamente e desenvolve as suas práticas. Mantém-se
      atualizado(a) quanto a novos desenvolvimentos e ideias através de trocas
      com colegas e ajuda outros a aproveitarem o potencial das tecnologias
      digitais para melhorarem o ensino e a aprendizagem. Se estiver pronto(a)
      para experimentar mais um pouco, será capaz de atingir o último nível de
      competência: o(a) Pioneiro(a).
    </p>

    <h6>Se a sua pontuação está acima de 80 é um(a) Pioneiro(a) (C2)</h6>
    <p>
      Isto significa que questiona a adequação de práticas digitais e
      pedagógicas contemporâneas, das quais já é Líder. Está preocupado(a) com
      as limitações ou desvantagens dessas práticas e é levado(a) pelo impulso
      para inovar cada vez mais a educação. Experimenta tecnologias digitais
      altamente inovadoras e complexas e/ou desenvolve novas abordagens
      pedagógicas. Lidera a inovação e é um exemplo para outros docentes.
    </p>
    <p>
      Para compreender melhor o seu perfil de competência, deve olhar para o seu
      desempenho por área. Devido ao número limitado de questões utilizadas
      ​​nessa ferramenta, não é possível calcular uma pontuação fiável por área.
    </p>
  </div>
</template>

<style scoped>
h1,
h3,
h5,
h6,
th {
  font-weight: bold !important;
}

th,
td {
  padding: 0.5em;
}
</style>
