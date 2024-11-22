<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const isFilled = ref(false);

const inputValue = computed({
  get() {
    return store.state.siape;
  },
  set(value) {
    store.commit("setSiape", value);
    isFilled.value = value.toString().length >= 1;
  },
});

function next() {
  router.push("/levels");
}
</script>

<template>
  <div class="container">
    <div class="card card-main">
      <div class="card-body">
        <div class="card-text">
          <p>
            Caro(a) Docente, este instrumento foi elaborado a partir do projeto
            de pesquisa cadastrado na UFRN, coordenado pela Professora Maria
            Carmem F.D. Rêgo, denominado
            <strong>
              “Investigação de competências digitais para o ensino e o
              desenvolvimento de recursos e tecnologias educacionais para
              formação de servidores da UFRN”
            </strong>
            que tem como objetivo realizar pesquisas que possibilitem a
            investigação de competências e habilidades dirigidas ao ensino, bem
            como o desenvolvimento de recursos e tecnologias educacionais a
            serem empregados nos processos formativos dos servidores da UFRN,
            tomando como pressuposto a perspectiva de formação sustentada pelos
            princípios da inovação e da colaboração. Utiliza como base o
            instrumento DigCompEdu descrito a seguir:
          </p>
          <h6>Sobre o DigCompEdu</h6>
          <p>
            O
            <a
              href="https://drive.google.com/file/d/14__1tMVUpjEg9mTQwQT_P2vH6XCEPsVW/view?usp=sharing"
              >DigCompEdu Check-In</a
            >
            é uma ferramenta de autorreflexão desenvolvida pelo Joint Research
            Centre (JRC) da Comissão Europeia, em Sevilha, em colaboração com
            Margarida Lucas, do CIDTFF - Universidade de Aveiro, que é a
            coordenadora nacional das versões portuguesas.
          </p>
          <p>
            Esta ferramenta de autorreflexão baseia-se no Quadro Europeu de
            Competência Digital para Educadores (DigCompEdu). O DigCompEdu
            descreve 22 competências que se organizam em 6 áreas. As
            competências são explicadas de acordo com seis níveis de
            proficiência diferentes (A1, A2, B1, B2, C1, C2). Dirige-se a
            educadores (no sentido lato do termo) de todos os níveis de
            educação, desde o pré-escolar ao profissional, até a educação
            superior e educação de adultos. O foco do quadro é apoiar e
            incentivar a utilização de ferramentas digitais para melhorar e
            inovar a educação.
          </p>
          <p>
            Esta ferramenta tem como objetivo permitir-lhe refletir sobre os
            seus pontos fortes e frágeis no uso de tecnologias digitais na
            educação. Convidamo-lo(a) a fazê-lo tendo em conta 22 itens que
            representam as 22 competências do DigCompEdu. Para cada um desses
            itens, escolha uma das cinco opções de resposta.
          </p>
          <p>
            Para você, sua participação no preenchimento deste instrumento o
            auxiliará em sua reflexão sobre seu nível de proficiência em relação
            às suas competências digitais e a partir deste diagnóstico traçar e
            decidir sobre os passos específicos a tomar para melhorar a sua
            competência relativamente ao nível em que se encontra.
          </p>

          <p>
            Para a UFRN, sua participação no preenchimento deste instrumento,
            auxiliará na tomada de decisão sobre oferta de formação em
            tecnologias digitais que dialoguem com suas reais necessidades de
            aprendizagens.
          </p>
          <p>
            Assim, solicitamos sua matrícula SIAPE apenas para identificação
            interna da pesquisa. Suas informações são sigilosas e os dados
            provenientes da pesquisa serão publicados de forma anônima e de
            livre consulta à comunidade depois de sua aplicação.
          </p>
          <p>
            Ao final do questionário você receberá sua pontuação e a definição
            de seu nível de competência baseado neste framework.
          </p>
          <p>
            Quaisquer dúvidas estaremos a disposição no email:
            <a href="mailto:contato.pesquisa@sedis.ufrn.br">
              contato.pesquisa@sedis.ufrn.br </a
            >.
          </p>
        </div>
      </div>
    </div>
    <label for="siapeInput" class="form-label">
      Caso queria participar da pesquisa e concorde com o
      <a
        href="https://drive.google.com/file/d/1rp_CHsqhYgb3iMfipU5JBplkQE5Ji4Kz/view?usp=sharing"
        >Termo de Consentimento Livre e Esclarecido - TCLE</a
      >, digite o numero de sua matrícula SIAPE:
    </label>
    <input
      v-model="inputValue"
      class="form-control"
      id="siapeInput"
      type="number"
      placeholder="SIAPE*"
      aria-label="SIAPE"
      min="0"
    />
    <div class="buttons mb-5">
      <button
        :disabled="!isFilled"
        @click="next()"
        to="/levels"
        class="btn btn-success"
      >
        Concordo
      </button>
    </div>
  </div>
</template>
