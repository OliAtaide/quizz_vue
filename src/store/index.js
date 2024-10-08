import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    identificacao: "",
    siape: 0,
    acertos: [0, 0, 0, 0, 0, 0],
    avaliacao: [],
  },
  mutations: {
    SET_AVALIACAO(state, dados) {
      state.avaliacao = dados;
    },
    setAcertos(state, index, acertos) {
      state.acertos[index] = acertos;
    },
  },
  actions: {
    async fetchAvaliacoes({ commit }) {
      try {
        const response = await axios.get("/dict.json"); // Altere para o caminho do seu arquivo JSON
        commit("SET_AVALIACAO", response.data); // Comita os dados para o state
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    },
  },
  getters: {
    getAvaliacao: (state) => state.avaliacao, // Um getter para acessar os dados
  },
});
