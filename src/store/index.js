import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    identificacao: "",
    siape: 0,
    acertos: [0, 0, 0, 0, 0, 0],
    avaliacao: [],
    levels: [],
    current_level: null,
  },
  mutations: {
    SET_AVALIACAO(state, dados) {
      state.avaliacao = dados;
    },
    SET_LEVELS(state, dados) {
      state.levels = dados;
    },
    setAcertos(state, data) {
      state.acertos[data.index] = data.sum;
    },
    setSiape(state, value) {
      state.siape = value;
    },
    SET_CURRENT_LEVEL(state, level) {
      state.current_level = level;
    },
  },
  actions: {
    async fetchAvaliacoes({ commit }) {
      try {
        const response = await axios.get("/dict.json");
        commit("SET_AVALIACAO", response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    },
    async fetchLevels({ commit }) {
      try {
        const response = await axios.get("/levels.json");
        commit("SET_LEVELS", response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    },
    async fetchAcertos({ commit, state }) {
      let list = state.acertos;
      let sum = 0;
      const url =
        "https://script.google.com/macros/s/AKfycbzvDpIMseqqj6kADm-cMbFqCeat6ykQSYvqYOG-ILKlG_mZmcBGS8fBpw1105YRcPEWYg/exec";

      list.forEach((l) => {
        sum += l;
      });

      try {
        const response = await axios.get("/total.json");
        response.data.forEach((l) => {
          const [min, max] = l.pontos;
          if (sum >= min && (max === undefined || sum <= max)) {
            commit("SET_CURRENT_LEVEL", l);
            console.log(l);
          }
        });
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }

      fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          Object.values({
            identificacao: "",
            SIAPE: state.siape,
            total: sum,
            area1: list[0],
            area2: list[1],
            area3: list[2],
            area4: list[3],
            area5: list[4],
            area6: list[5],
          })
        ),
      })
        .then((response) => {
          console.log(response);
        })
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    },
  },
  getters: {
    getAvaliacao: (state) => state.avaliacao,
  },
});
