(function(){var a={6460:function(a,e,t){"use strict";var o=t(5130),s=t(6768),i=t.p+"img/cc.0b9d9ebf.svg",r=t.p+"img/logos.6d091901.svg";const d={class:"footer"};function n(a,e){return(0,s.uX)(),(0,s.CE)("div",d,e[0]||(e[0]=[(0,s.Lk)("img",{class:"cc",src:i,alt:""},null,-1),(0,s.Lk)("img",{class:"logos",src:r,alt:""},null,-1)]))}var c=t(1241);const l={},u=(0,c.A)(l,[["render",n]]);var p=u;const v={class:"navbar"};function m(a,e){return(0,s.uX)(),(0,s.CE)("div",v,e[0]||(e[0]=[(0,s.Lk)("div",{class:"container container-fluid"},[(0,s.Lk)("div",{class:"navbar-brand mx-auto text-white"}," Ferramenta de Autoavaliação da Competência Digital dos Professores "),(0,s.Lk)("a",{href:"https://lais.huol.ufrn.br/"},[(0,s.eW)(" Portal LAIS "),(0,s.Lk)("i",{class:"bi bi-box-arrow-up-right"})])],-1)]))}const f={},g=(0,c.A)(f,[["render",m]]);var h=g,b={__name:"App",setup(a){return(a,e)=>{const t=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(h),(0,s.bF)(t),(0,s.bF)(p)],64)}}};const k=b;var E=k,L=t(1387),C=(t(4114),t(144)),x=t(782);const A={class:"container"},y={class:"buttons mb-5"},q=["disabled"];var _={__name:"HomeView",setup(a){const e=(0,x.Pj)(),t=(0,L.rd)(),i=(0,C.KR)(!1),r=(0,s.EW)({get(){return e.state.siape},set(a){e.commit("setSiape",a),i.value=a.toString().length>=1}});function d(){t.push("/levels")}return(a,e)=>((0,s.uX)(),(0,s.CE)("div",A,[e[2]||(e[2]=(0,s.Fv)('<div class="card card-main"><div class="card-body"><div class="card-text"><p> Este instrumento foi elaborado a partir do projeto de pesquisa cadastrado na UFRN, coordenado pela Professora Maria Carmem Freire Diógenes Rego, denominado &quot;Investigação de competências digitais para o ensino e o desenvolvimento de recursos e tecnologias educacionais para formação de servidores da UFRN&quot; que tem como objetivo realizar pesquisas que possibilitem a investigação de competências e habilidades dirigidas ao ensino, bem como o desenvolvimento de recursos e tecnologias educacionais a serem empregados nos processos formativos dos servidores da UFRN, tomando como pressuposto a perspectiva de formação sustentada pelos princípios da inovação e da colaboração. Utiliza como base o instrumento DigCompEdu, descrito a seguir: </p><h6>Sobre o DigCompEdu</h6><p> O DigCompEdu Check-In é uma ferramenta de autorreflexão desenvolvida pelo Joint Research Centre (JRC) da Comissão Europeia, em Sevilha, em colaboração com Margarida Lucas, do CIDTFF - Universidade de Aveiro, que é a coordenadora nacional das versões portuguesas. </p><p> Esta ferramenta de autorreflexão baseia-se no Quadro Europeu de Competência Digital para Educadores (DigCompEdu). O DigCompEdu descreve 22 competências que se organizam em 6 áreas. As competências são explicadas de acordo com seis níveis de proficiência diferentes (A1, A2, B1, B2, C1, C2). Dirige-se a educadores (no sentido lato do termo) de todos os níveis de educação, desde o pré-escolar ao profissional, até a educação superior e educação de adultos. O foco do quadro é apoiar e incentivar a utilização de ferramentas digitais para melhorar e inovar a educação. </p><p> Esta ferramenta tem como objetivo permitir-lhe refletir sobre os seus pontos fortes e frágeis no uso de tecnologias digitais na educação. Convidamo-lo(a) a fazê-lo tendo em conta 22 itens que representam as 22 competências do DigCompEdu. Para cada um desses itens, escolha uma das cinco opções de resposta. </p><p> Para você, sua participação no preenchimento deste instrumento o auxiliará em sua reflexão sobre seu nível de proficiência em relação às suas competências digitais e a partir deste diagnóstico traçar e decidir sobre os passos específicos a tomar para melhorar a sua competência relativamente ao nível em que se encontra. </p><p> Para a UFRN, sua participação no preenchimento deste instrumento, auxiliará na tomada de decisão sobre oferta de formação em tecnologias digitais que dialoguem com suas reais necessidades de aprendizagens. </p><p> Assim, solicitamos sua matrícula SIAPE apenas para identificação interna da pesquisa. Suas informações são sigilosas e os dados provenientes da pesquisa serão publicados de forma anônima e de livre consulta à comunidade depois de sua aplicação. </p><p> Ao final do questionário você receberá sua pontuação e a definição de seu nível de competência baseado neste framework. </p><p>Quaisquer dúvidas estaremos a disposição no email: xxx</p></div></div></div><label for="siapeInput" class="form-label"> Caso queira participar da pesquisa, digite o número de sua matricula SIAPE: </label>',2)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a),class:"form-control",id:"siapeInput",type:"number",placeholder:"SIAPE*","aria-label":"SIAPE",min:"0"},null,512),[[o.Jo,r.value]]),(0,s.Lk)("div",y,[(0,s.Lk)("button",{disabled:!i.value,onClick:e[1]||(e[1]=a=>d()),to:"levels",class:"btn btn-success"}," Concordo ",8,q)])]))}};const S=_;var P=S,I=t(4232);const R={class:"card card-level"},w={class:"card-body"},F=["src"],O={class:"card-text"};var j={__name:"LevelCard",props:["data"],setup(a){const e=a;return(a,o)=>((0,s.uX)(),(0,s.CE)("div",R,[(0,s.Lk)("div",w,[(0,s.Lk)("img",{src:t(1558)(`./${e.data.imagem}.png`),alt:""},null,8,F),(0,s.Lk)("div",O,[(0,s.Lk)("strong",null,(0,I.v_)(e.data.titulo),1),(0,s.eW)(" "+(0,I.v_)(e.data.texto),1)])])]))}};const V=j;var z=V,B=t(4373);const D={key:0,class:"container"},T={class:"card card-main"},N={class:"card-body"},X={class:"row row-levels"},U={class:"buttons"};var K={__name:"LevelsView",setup(a){const e=(0,C.KR)(!1);var t=[];function o(){B.A.get("total.json").then((a=>{t=a.data,e.value=!0}))}return(0,s.sV)((()=>{o()})),(a,o)=>{const i=(0,s.g2)("router-link");return e.value?((0,s.uX)(),(0,s.CE)("div",D,[(0,s.Lk)("div",T,[(0,s.Lk)("div",N,[o[2]||(o[2]=(0,s.Lk)("h6",null,"Autodiagnóstico sobre Competências Digitais",-1)),o[3]||(o[3]=(0,s.Lk)("p",null," De acordo com o quadro DigCompEdu, podemos classificar os níveis de competências digitais dos docentes em: ",-1)),(0,s.Lk)("div",X,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,C.R1)(t),(a=>((0,s.uX)(),(0,s.CE)("div",{class:"col-sm-6",key:a.titulo},[(0,s.bF)(z,{data:a},null,8,["data"])])))),128))]),(0,s.Lk)("div",U,[(0,s.bF)(i,{to:"./",class:"btn btn-outline-primary",href:"index.html"},{default:(0,s.k6)((()=>o[0]||(o[0]=[(0,s.eW)(" Voltar ")]))),_:1}),(0,s.bF)(i,{to:"1",class:"btn btn-primary"},{default:(0,s.k6)((()=>o[1]||(o[1]=[(0,s.eW)(" Próximo ")]))),_:1})])])])])):(0,s.Q3)("",!0)}}};const W=K;var $=W,M=t(1610),Q=t(4493),J=t(6587);const Y={class:"titulo text-center"},G={class:"opcoes"},H=["Value","onClick"];var Z={__name:"AreaQuestao",props:["data","id"],emits:["update:selectedValue"],setup(a,{emit:e}){const t=a,o=(0,C.KR)(null),i=e,r=a=>{o.value=a,i("update:selectedValue",a,t.id),J(`.pergunta${t.id} .opcao`).removeClass("active"),J(`.pergunta${t.id} .opcao${a}`).addClass("active")};return(e,t)=>((0,s.uX)(),(0,s.CE)("div",{class:(0,I.C4)(`pergunta pergunta${a.id}`)},[(0,s.Lk)("div",Y,(0,I.v_)(a.data.titulo),1),(0,s.Lk)("div",G,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.data.opcoes,((a,e)=>((0,s.uX)(),(0,s.CE)("button",{key:a,type:"button",class:(0,I.C4)(`btn opcao opcao${e}`),Value:e,onClick:a=>r(e)},(0,I.v_)(a),11,H)))),128))])],2))}};const aa=Z;var ea=aa;const ta={key:0,class:"container"},oa={class:"card card-main"},sa={class:"card-body"},ia={class:"nav nav-fases nav-fill",id:"myTab"},ra={class:"main1"},da={class:"fase-header"},na={class:"fase-title"},ca={class:"progress",role:"progressbar","aria-label":"Basic example","aria-valuenow":"0","aria-valuemin":"0","aria-valuemax":"100"},la={class:"perguntas"},ua={class:"buttons"},pa=["disabled"],va={class:"main2",style:{display:"none"}},ma={class:"fase-header"},fa={class:"fase-title"},ga={class:"fase-title mt-3",style:{display:"none"}},ha={class:"buttons m-0"};var ba={__name:"AreaView",setup(a){const e=(0,L.lq)(),t=(0,L.rd)(),i=(0,x.Pj)();var r=e.params.id,d=r-1;const n=(0,C.KR)(!1),c=(0,C.KR)(!1),l=(0,C.KR)("");var u=null,p=null,v=0,m=[];function f(){B.A.get("levels.json").then((a=>{p=a.data[d]})),B.A.get("dict.json").then((a=>{u=a.data[d],v=100/6*parseInt(d),n.value=!0}))}function g(){var a=0;m.forEach((e=>{a+=e}));var e=d;i.commit("setAcertos",{index:e,sum:a}),p.forEach((e=>{const[t,o]=e.pontos;a>=t&&(void 0===o||a<=o)&&(l.value=e.nome)})),J(".main1").hide(),J(".main2").show()}(0,s.sV)((()=>{f()})),(0,s.wB)((()=>e.params.id),(a=>{n.value=!1,c.value=!1,m=[],r=a,d=a-1,f()}));const h=(a,e)=>{console.log(a),m[e]=a,c.value=b()==u.questoes.length};var b=()=>m.filter((a=>null!==a&&void 0!==a&&""!==a)).length;function k(){r<6?t.push(`/${parseInt(r)+1}`):(i.dispatch("fetchAcertos"),t.push("end"))}return(a,e)=>{const t=(0,s.g2)("router-link");return n.value?((0,s.uX)(),(0,s.CE)("div",ta,[(0,s.Lk)("div",oa,[(0,s.Lk)("div",sa,[e[6]||(e[6]=(0,s.Lk)("p",{class:"subtitle"},"Áreas:",-1)),(0,s.Lk)("ul",ia,[((0,s.uX)(),(0,s.CE)(s.FK,null,(0,s.pI)(6,(a=>(0,s.Lk)("li",{key:a,class:"nav-item"},[(0,s.bF)(t,{to:`/${a}`,class:(0,I.C4)("nav-link "+(a==(0,C.R1)(r)?"active":"")),type:"button"},{default:(0,s.k6)((()=>[(0,s.eW)((0,I.v_)(a),1)])),_:2},1032,["to","class"])]))),64))]),(0,s.Lk)("div",ra,[(0,s.Lk)("div",da,[(0,s.Lk)("h1",na,"Área "+(0,I.v_)((0,C.R1)(r))+": "+(0,I.v_)((0,C.R1)(u).titulo),1),(0,s.Lk)("div",ca,[(0,s.Lk)("div",{class:"progress-bar",style:(0,I.Tr)(`width: ${(0,C.R1)(v)}%`)},null,4)]),e[1]||(e[1]=(0,s.Lk)("img",{src:M,class:"img07",alt:""},null,-1))]),(0,s.Lk)("form",{onSubmit:(0,o.D$)(g,["prevent"])},[(0,s.Lk)("div",la,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,C.R1)(u).questoes,((a,e)=>((0,s.uX)(),(0,s.Wv)(ea,{key:a.titulo,data:a,id:e,"onUpdate:selectedValue":h},null,8,["data","id"])))),128))]),(0,s.Lk)("div",ua,[(0,s.bF)(t,{class:"btn btn-outline-primary",to:"levels"},{default:(0,s.k6)((()=>e[2]||(e[2]=[(0,s.eW)(" Voltar ")]))),_:1}),(0,s.Lk)("button",{type:"submit",class:"btn btn-primary",disabled:!c.value}," Próximo ",8,pa)])],32)]),(0,s.Lk)("div",va,[(0,s.Lk)("div",ma,[e[4]||(e[4]=(0,s.Lk)("img",{src:Q,class:"img08",alt:""},null,-1)),(0,s.Lk)("h1",fa,"Parabéns! Você concluiu a Área "+(0,I.v_)((0,C.R1)(r))+"!",1),(0,s.Lk)("h2",ga,[e[3]||(e[3]=(0,s.eW)(" Nível de Competência Digital: ")),(0,s.Lk)("strong",null,(0,I.v_)(l.value),1)])]),(0,s.Lk)("div",ha,[e[5]||(e[5]=(0,s.Lk)("button",{class:"btn btn-outline-primary",href:"fase.html"}," Voltar ",-1)),(0,s.Lk)("button",{onClick:e[0]||(e[0]=a=>k()),class:"btn btn-primary"},"Próximo")])])])])])):(0,s.Q3)("",!0)}}};const ka=ba;var Ea=ka,La=t(1252);const Ca={class:"container"},xa={class:"card card-main"},Aa={class:"card-body"},ya={class:"fase-header"},qa={class:"buttons"};var _a={__name:"EndView",setup(a){const e=(0,x.Pj)(),t=(e.state.current_level,(0,C.KR)(!1));var o=null;return(0,s.wB)((()=>e.state.current_level),(a=>{t.value=!0,o=a})),(a,e)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",Ca,[(0,s.Lk)("div",xa,[(0,s.Lk)("div",Aa,[(0,s.Lk)("div",ya,[e[2]||(e[2]=(0,s.Lk)("img",{src:La,class:"img09 w-25",alt:""},null,-1)),e[3]||(e[3]=(0,s.Lk)("h3",{class:"fase-title"},"Parabéns! instrumento! Sua classificação:",-1)),t.value?((0,s.uX)(),(0,s.Wv)(z,{key:0,data:(0,C.R1)(o)},null,8,["data"])):(0,s.Q3)("",!0),e[4]||(e[4]=(0,s.Lk)("h3",null,' Obrigado por sua contribuição. Você pode imprimir seu relatório pressionando o botão "Imprimir". ',-1)),(0,s.Lk)("div",qa,[(0,s.bF)(i,{to:"/6",class:"btn btn-outline-primary",href:"fase2.html"},{default:(0,s.k6)((()=>e[0]||(e[0]=[(0,s.eW)(" Voltar ")]))),_:1}),e[1]||(e[1]=(0,s.Lk)("a",{class:"btn btn-primary",href:"#"}," Finalizar ",-1))])])])])])}}};const Sa=_a;var Pa=Sa;const Ia={class:"result"};var Ra={__name:"ResultFile",setup(a){return(a,e)=>((0,s.uX)(),(0,s.CE)("div",Ia,e[0]||(e[0]=[(0,s.Fv)('<h3 class="text-center" data-v-3ae2f65d> DigCompEdu Check-In Brasil MetaRed - Resultados </h3><table class="table table-bordered" data-v-3ae2f65d><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área</th><th data-v-3ae2f65d>Pontuação</th></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área 1: Envolvimento profissional</th><td data-v-3ae2f65d>0/16</td></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área 2: Tecnologias Digitais</th><td data-v-3ae2f65d>1/12</td></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área 3: Ensino e Aprendizagem</th><td data-v-3ae2f65d>7/16</td></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área 4: Avaliação</th><td data-v-3ae2f65d>3/12</td></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área 5: Capacitação dos estudantes</th><td data-v-3ae2f65d>8/12</td></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área 6: Promoção da competência digital dos estudantes</th><td data-v-3ae2f65d>15/20</td></tr><tr data-v-3ae2f65d><th data-v-3ae2f65d>Pontuação total</th><td data-v-3ae2f65d>34/88</td></tr></table><h6 data-v-3ae2f65d>Se a sua pontuação está abaixo de 20 é um(a) Recém-chegado(a) (A1)</h6><p data-v-3ae2f65d> Isto significa que tem uma oportunidade para começar a melhorar a utilização que faz das tecnologias digitais para o ensino. O feedback deste questionário identificou várias ações que pode tentar. Selecione uma ou duas para começar durante o próximo período letivo, concentrando-se em melhorar significativamente as suas estratégias de ensino. Ao fazer isso, estará a movimentar-se para a próxima etapa da competência digital: o nível do(a) Explorador(a). </p><h6 data-v-3ae2f65d>Se a sua pontuação está entre 20 e 33 é um(a) Explorador(a) (A2)</h6><p data-v-3ae2f65d> Isto significa que tem consciência do potencial das tecnologias digitais e está interessado(a) em explorá-las para melhorar a prática pedagógica e profissional. Já começou a usar tecnologias digitais em algumas áreas e irá beneficiar de uma prática mais consistente. Pode aumentar a sua competência através da colaboração e troca com colegas e da ampliação do seu repertório de práticas e habilidades digitais. Isso o(a) levará ao próximo nível de competência digital: o(a) Integrador(a). </p><h6 data-v-3ae2f65d>Se a sua pontuação está entre 34 e 49 é um(a) Integrador(a) (B1)</h6><p data-v-3ae2f65d> Isto significa que experimenta tecnologias digitais numa variedade de contextos e para uma série de propósitos, integrando-as em muitas das suas práticas. Utiliza-as criativamente para melhorar diversos aspectos do seu envolvimento profissional e está disposto(a) a expandir o seu repertório de práticas. Beneficiará se melhorar a compreensão sobre que ferramentas funcionam melhor em que situações e sobre a adequação de tecnologias digitais a métodos e estratégias pedagógicas. Tente dar a si mesmo(a) mais algum tempo para experimentar e refletir, complementando-o com incentivo colaborativo e troca de conhecimento, para chegar ao próximo nível: o(a) Especialista (B2). </p><h6 data-v-3ae2f65d>Se a sua pontuação está entre 50 e 65 é um(a) Especialista (B2)</h6><p data-v-3ae2f65d> Isto significa que usa uma variedade de tecnologias digitais com confiança, criatividade e espírito crítico para melhorar as suas atividades profissionais. Seleciona tecnologias digitais propositadamente para situações específicas e procura compreender as vantagens e desvantagens de diferentes estratégias digitais. É curioso(a) e aberto(a) a novas ideias, sabendo que há muitas coisas que ainda não experimentou. Utiliza a experimentação como um meio de expandir, estruturar e consolidar o seu repertório de estratégias. Partilhe o seu conhecimento com outros docentes e continue a desenvolver de forma crítica as suas estratégias digitais para alcançar o nível de Líder (C1). </p><h6 data-v-3ae2f65d>Se a sua pontuação está entre 66 e 80 é um(a) Líder (C1)</h6><p data-v-3ae2f65d> Isto significa que tem uma abordagem consistente e abrangente no que toca à utilização de tecnologias digitais para melhorar práticas pedagógicas e profissionais. Conta com um amplo repertório de estratégias digitais, do qual sabe escolher a mais adequada para qualquer situação concreta. Reflete continuamente e desenvolve as suas práticas. Mantém-se atualizado(a) quanto a novos desenvolvimentos e ideias através de trocas com colegas e ajuda outros a aproveitarem o potencial das tecnologias digitais para melhorarem o ensino e a aprendizagem. Se estiver pronto(a) para experimentar mais um pouco, será capaz de atingir o último nível de competência: o(a) Pioneiro(a). </p><h6 data-v-3ae2f65d>Se a sua pontuação está acima de 80 é um(a) Pioneiro(a) (C2)</h6><p data-v-3ae2f65d> Isto significa que questiona a adequação de práticas digitais e pedagógicas contemporâneas, das quais já é Líder. Está preocupado(a) com as limitações ou desvantagens dessas práticas e é levado(a) pelo impulso para inovar cada vez mais a educação. Experimenta tecnologias digitais altamente inovadoras e complexas e/ou desenvolve novas abordagens pedagógicas. Lidera a inovação e é um exemplo para outros docentes. </p><p data-v-3ae2f65d> Para compreender melhor o seu perfil de competência, deve olhar para o seu desempenho por área. Devido ao número limitado de questões utilizadas ​​nesta ferramenta, não é possível calcular uma pontuação fiável por área. No entanto, para lhe dar uma ideia que o(a) pode ajudar a determinar os seus pontos fortes e fracos, aplica-se a seguinte regra geral: </p><h6 data-v-3ae2f65d>Nas Áreas 1 e 3:</h6><ul data-v-3ae2f65d><li data-v-3ae2f65d>Recém-chegado(a) (A1): 4 pontos;</li><li data-v-3ae2f65d>Explorador(a) (A2): 5-7 pontos;</li><li data-v-3ae2f65d>Integrador(a) (B1): 8-10 pontos;</li><li data-v-3ae2f65d>Especialista (B2): 11-13 pontos;</li><li data-v-3ae2f65d>Líder (C1): 14-15 pontos;</li><li data-v-3ae2f65d>Pioneiro(a) (C2): 16 pontos</li></ul><h6 data-v-3ae2f65d>Nas Áreas 2, 4 e 5:</h6><ul data-v-3ae2f65d><li data-v-3ae2f65d>Recém-chegado(a) (A1): 3 pontos;</li><li data-v-3ae2f65d>Explorador(a) (A2): 4-5 pontos;</li><li data-v-3ae2f65d>Integrador(a) (B1): 6-7 pontos;</li><li data-v-3ae2f65d>Especialista (B2): 8-9 pontos;</li><li data-v-3ae2f65d>Líder (C1): 10-11 pontos;</li><li data-v-3ae2f65d>Pioneiro(a) (C2): 12 pontos</li></ul><h6 data-v-3ae2f65d>Na Área 6:</h6><ul data-v-3ae2f65d><li data-v-3ae2f65d>Recém-chegado(a) (A1): 5-6 pontos;</li><li data-v-3ae2f65d>Explorador(a) (A2): 7-8 pontos;</li><li data-v-3ae2f65d>Integrador(a) (B1): 9-12 pontos;</li><li data-v-3ae2f65d>Especialista (B2): 13-16 pontos;</li><li data-v-3ae2f65d>Líder (C1): 17-19 pontos;</li><li data-v-3ae2f65d>Pioneiro(a) (C2): 20 pontos</li></ul><div class="text-center" data-v-3ae2f65d><h3 data-v-3ae2f65d>Você é um(a) Integrador(a) (B1)</h3><p data-v-3ae2f65d> Isto significa: experimenta tecnologias digitais numa variedade de contextos e para uma série de propósitos, integrando-as em muitas das suas práticas. Utiliza-as criativamente para melhorar diversos aspectos do seu envolvimento profissional e está disposto(a) a expandir o seu repertório de práticas. Beneficiará se melhorar a compreensão sobre que ferramentas funcionam melhor em que situações e sobre a adequação de tecnologias digitais a métodos e estratégias pedagógicas. Tente dar a si mesmo(a) mais algum tempo para experimentar e refletir, complementando-o com incentivo colaborativo e troca de conhecimento para chegar ao próximo nível, o de Especialista (B2). </p></div><h5 data-v-3ae2f65d>Cálculo das pontuações</h5><h6 data-v-3ae2f65d> Para cada resposta das 22 perguntas: <ul data-v-3ae2f65d><li data-v-3ae2f65d>letra a vale 0 pontos,</li><li data-v-3ae2f65d>letra b vale 1 ponto,</li><li data-v-3ae2f65d>letra c vale 2 pontos,</li><li data-v-3ae2f65d>letra d vale 3 pontos,</li><li data-v-3ae2f65d>letra e vale 4 pontos.</li></ul></h6><h3 data-v-3ae2f65d>Nível de competência digital</h3><table class="table table-bordered" data-v-3ae2f65d><tr data-v-3ae2f65d><th data-v-3ae2f65d>Nível</th><th data-v-3ae2f65d>Pontuação</th></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>A1 – Recém-chegados</td><td data-v-3ae2f65d>&lt; 20</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>A2 – Exploradores</td><td data-v-3ae2f65d>20 até 33</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>B1 – Integradores</td><td data-v-3ae2f65d>34 até 49</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>B2 – Especialistas</td><td data-v-3ae2f65d>50 até 65</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>C1 – Líderes</td><td data-v-3ae2f65d>66 até 80</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>C2 – Pioneiros</td><td data-v-3ae2f65d>&gt; 80</td></tr></table><h3 data-v-3ae2f65d>Áreas e Níveis</h3><table class="table table-bordered" data-v-3ae2f65d><tr data-v-3ae2f65d><th data-v-3ae2f65d>Área</th><th data-v-3ae2f65d>Nível</th><th data-v-3ae2f65d>Pontuação</th></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>Área 1</td><td data-v-3ae2f65d>A1</td><td data-v-3ae2f65d>1 a 4</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>Área 2</td><td data-v-3ae2f65d>A1</td><td data-v-3ae2f65d>1 a 3</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>Área 3</td><td data-v-3ae2f65d>A1</td><td data-v-3ae2f65d>1 a 4</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>Área 4</td><td data-v-3ae2f65d>A1</td><td data-v-3ae2f65d>1 a 3</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>Área 5</td><td data-v-3ae2f65d>A1</td><td data-v-3ae2f65d>1 a 3</td></tr><tr data-v-3ae2f65d><td data-v-3ae2f65d>Área 6</td><td data-v-3ae2f65d>A1</td><td data-v-3ae2f65d>1 a 6</td></tr></table>',28)])))}};const wa=(0,c.A)(Ra,[["__scopeId","data-v-3ae2f65d"]]);var Fa=wa;const Oa=[{path:"",name:"home",component:P},{path:"levels",name:"levels",component:$},{path:":id",name:"AreaView",component:Ea},{path:"end",name:"EndView",component:Pa},{path:"result",name:"Result",component:Fa}],ja=(0,L.aE)({mode:"history",history:(0,L.LA)(""),routes:Oa});var Va=ja,za=(0,x.y$)({state:{identificacao:"",siape:0,acertos:[0,0,0,0,0,0],avaliacao:[],levels:[],current_level:null},mutations:{SET_AVALIACAO(a,e){a.avaliacao=e},SET_LEVELS(a,e){a.levels=e},setAcertos(a,e){a.acertos[e.index]=e.sum},setSiape(a,e){a.siape=e},SET_CURRENT_LEVEL(a,e){a.current_level=e}},actions:{async fetchAvaliacoes({commit:a}){try{const e=await B.A.get("dict.json");a("SET_AVALIACAO",e.data)}catch(e){console.error("Erro ao carregar os dados:",e)}},async fetchLevels({commit:a}){try{const e=await B.A.get("levels.json");a("SET_LEVELS",e.data),console.log(e.data)}catch(e){console.error("Erro ao carregar os dados:",e)}},async fetchAcertos({commit:a,state:e}){let t=e.acertos,o=0;const s="https://script.google.com/macros/s/AKfycbzvDpIMseqqj6kADm-cMbFqCeat6ykQSYvqYOG-ILKlG_mZmcBGS8fBpw1105YRcPEWYg/exec";t.forEach((a=>{o+=a}));try{const e=await B.A.get("total.json");e.data.forEach((e=>{const[t,s]=e.pontos;o>=t&&(void 0===s||o<=s)&&(a("SET_CURRENT_LEVEL",e),console.log(e))}))}catch(i){console.error("Erro ao carregar os dados:",i)}fetch(s,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.values({identificacao:"",SIAPE:e.siape,total:o,area1:t[0],area2:t[1],area3:t[2],area4:t[3],area5:t[4],area6:t[5]}))}).then((a=>{console.log(a)})).then((a=>console.log("Success:",a))).catch((a=>console.error("Error:",a)))}},getters:{getAvaliacao:a=>a.avaliacao}});t(8077);(0,o.Ef)(E).use(za).use(Va).mount("#app")},1558:function(a,e,t){var o={"./01.png":2044,"./02.png":9079,"./03.png":6942,"./04.png":1505,"./05.png":9464,"./06.png":1443,"./07.png":1610,"./08.png":4493,"./09.png":1252};function s(a){var e=i(a);return t(e)}function i(a){if(!t.o(o,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return o[a]}s.keys=function(){return Object.keys(o)},s.resolve=i,a.exports=s,s.id=1558},2044:function(a,e,t){"use strict";a.exports=t.p+"img/01.7797bd5e.png"},9079:function(a,e,t){"use strict";a.exports=t.p+"img/02.d4a86831.png"},6942:function(a,e,t){"use strict";a.exports=t.p+"img/03.b82504aa.png"},1505:function(a,e,t){"use strict";a.exports=t.p+"img/04.d9e02493.png"},9464:function(a,e,t){"use strict";a.exports=t.p+"img/05.cc03394c.png"},1443:function(a,e,t){"use strict";a.exports=t.p+"img/06.72f0210a.png"},1610:function(a,e,t){"use strict";a.exports=t.p+"img/07.c513b2cc.png"},4493:function(a,e,t){"use strict";a.exports=t.p+"img/08.631abbff.png"},1252:function(a,e,t){"use strict";a.exports=t.p+"img/09.8cf3af66.png"}},e={};function t(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return a[o].call(i.exports,i,i.exports,t),i.exports}t.m=a,function(){var a=[];t.O=function(e,o,s,i){if(!o){var r=1/0;for(l=0;l<a.length;l++){o=a[l][0],s=a[l][1],i=a[l][2];for(var d=!0,n=0;n<o.length;n++)(!1&i||r>=i)&&Object.keys(t.O).every((function(a){return t.O[a](o[n])}))?o.splice(n--,1):(d=!1,i<r&&(r=i));if(d){a.splice(l--,1);var c=s();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=a.length;l>0&&a[l-1][2]>i;l--)a[l]=a[l-1];a[l]=[o,s,i]}}(),function(){t.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return t.d(e,{a:e}),e}}(),function(){t.d=function(a,e){for(var o in e)t.o(e,o)&&!t.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:e[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){t.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){t.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var a={524:0};t.O.j=function(e){return 0===a[e]};var e=function(e,o){var s,i,r=o[0],d=o[1],n=o[2],c=0;if(r.some((function(e){return 0!==a[e]}))){for(s in d)t.o(d,s)&&(t.m[s]=d[s]);if(n)var l=n(t)}for(e&&e(o);c<r.length;c++)i=r[c],t.o(a,i)&&a[i]&&a[i][0](),a[i]=0;return t.O(l)},o=self["webpackChunkquizz_vue"]=self["webpackChunkquizz_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(6460)}));o=t.O(o)})();
//# sourceMappingURL=app.2c09f6ba.js.map