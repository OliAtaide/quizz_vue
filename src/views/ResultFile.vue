<script setup>
import * as $ from "jquery";

//print($('.result'));
</script>

<template>
  <div class="result">
    <h3 class="text-center">
      DigCompEdu Check-In Brasil MetaRed - Resultados
    </h3>
    <table class="table table-bordered">
      <tr>
        <th>Área</th>
        <th>Pontuação</th>
      </tr>
      <tr>
        <th>Área 1: Envolvimento profissional</th>
        <td>0/16</td>
      </tr>
      <tr>
        <th>Área 2: Tecnologias Digitais</th>
        <td>1/12</td>
      </tr>
      <tr>
        <th>Área 3: Ensino e Aprendizagem</th>
        <td>7/16</td>
      </tr>
      <tr>
        <th>Área 4: Avaliação</th>
        <td>3/12</td>
      </tr>
      <tr>
        <th>Área 5: Capacitação dos estudantes</th>
        <td>8/12</td>
      </tr>
      <tr>
        <th>Área 6: Promoção da competência digital dos estudantes</th>
        <td>15/20</td>
      </tr>
      <tr>
        <th>Pontuação total</th>
        <td>34/88</td>
      </tr>
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
      ​​nesta ferramenta, não é possível calcular uma pontuação fiável por área.
      No entanto, para lhe dar uma ideia que o(a) pode ajudar a determinar os
      seus pontos fortes e fracos, aplica-se a seguinte regra geral:
    </p>

    <h6>Nas Áreas 1 e 3:</h6>
    <ul>
      <li>Recém-chegado(a) (A1): 4 pontos;</li>
      <li>Explorador(a) (A2): 5-7 pontos;</li>
      <li>Integrador(a) (B1): 8-10 pontos;</li>
      <li>Especialista (B2): 11-13 pontos;</li>
      <li>Líder (C1): 14-15 pontos;</li>
      <li>Pioneiro(a) (C2): 16 pontos</li>
    </ul>

    <h6>Nas Áreas 2, 4 e 5:</h6>
    <ul>
      <li>Recém-chegado(a) (A1): 3 pontos;</li>
      <li>Explorador(a) (A2): 4-5 pontos;</li>
      <li>Integrador(a) (B1): 6-7 pontos;</li>
      <li>Especialista (B2): 8-9 pontos;</li>
      <li>Líder (C1): 10-11 pontos;</li>
      <li>Pioneiro(a) (C2): 12 pontos</li>
    </ul>

    <h6>Na Área 6:</h6>
    <ul>
      <li>Recém-chegado(a) (A1): 5-6 pontos;</li>
      <li>Explorador(a) (A2): 7-8 pontos;</li>
      <li>Integrador(a) (B1): 9-12 pontos;</li>
      <li>Especialista (B2): 13-16 pontos;</li>
      <li>Líder (C1): 17-19 pontos;</li>
      <li>Pioneiro(a) (C2): 20 pontos</li>
    </ul>

    <div class="text-center">
      <h3>Você é um(a) Integrador(a) (B1)</h3>
      <p>
        Isto significa: experimenta tecnologias digitais numa variedade de
        contextos e para uma série de propósitos, integrando-as em muitas das
        suas práticas. Utiliza-as criativamente para melhorar diversos aspectos
        do seu envolvimento profissional e está disposto(a) a expandir o seu
        repertório de práticas. Beneficiará se melhorar a compreensão sobre que
        ferramentas funcionam melhor em que situações e sobre a adequação de
        tecnologias digitais a métodos e estratégias pedagógicas. Tente dar a si
        mesmo(a) mais algum tempo para experimentar e refletir, complementando-o
        com incentivo colaborativo e troca de conhecimento para chegar ao
        próximo nível, o de Especialista (B2).
      </p>
    </div>
    <h5>Cálculo das pontuações</h5>
    <h6>
      Para cada resposta das 22 perguntas:
      <ul>
        <li>letra a vale 0 pontos,</li>
        <li>letra b vale 1 ponto,</li>
        <li>letra c vale 2 pontos,</li>
        <li>letra d vale 3 pontos,</li>
        <li>letra e vale 4 pontos.</li>
      </ul>
    </h6>

    <h3>Nível de competência digital</h3>
    <table class="table table-bordered">
      <tr>
        <th>Nível</th>
        <th>Pontuação</th>
      </tr>
      <tr>
        <td>A1 – Recém-chegados</td>
        <td>&lt; 20</td>
      </tr>
      <tr>
        <td>A2 – Exploradores</td>
        <td>20 até 33</td>
      </tr>
      <tr>
        <td>B1 – Integradores</td>
        <td>34 até 49</td>
      </tr>
      <tr>
        <td>B2 – Especialistas</td>
        <td>50 até 65</td>
      </tr>
      <tr>
        <td>C1 – Líderes</td>
        <td>66 até 80</td>
      </tr>
      <tr>
        <td>C2 – Pioneiros</td>
        <td>> 80</td>
      </tr>
    </table>

    <h3>Áreas e Níveis</h3>
    <table class="table table-bordered">
      <tr>
        <th>Área</th>
        <th>Nível</th>
        <th>Pontuação</th>
      </tr>
      <tr>
        <td>Área 1</td>
        <td>A1</td>
        <td>1 a 4</td>
      </tr>
      <tr>
        <td>Área 2</td>
        <td>A1</td>
        <td>1 a 3</td>
      </tr>
      <tr>
        <td>Área 3</td>
        <td>A1</td>
        <td>1 a 4</td>
      </tr>
      <tr>
        <td>Área 4</td>
        <td>A1</td>
        <td>1 a 3</td>
      </tr>
      <tr>
        <td>Área 5</td>
        <td>A1</td>
        <td>1 a 3</td>
      </tr>
      <tr>
        <td>Área 6</td>
        <td>A1</td>
        <td>1 a 6</td>
      </tr>
      <!-- Continue as demais áreas conforme necessário -->
    </table>
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
</style>
