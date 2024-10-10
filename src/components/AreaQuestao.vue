<script setup>
import { ref, defineEmits } from "vue";
import * as $ from "jquery";

const props = defineProps(["data", "id"]);

const selectedValue = ref(null);

const emit = defineEmits(["update:selectedValue"]);

const selectOption = (value) => {
  selectedValue.value = value;
  emit("update:selectedValue", value, props.id);

  $(`.pergunta${props.id} .opcao`).removeClass("active");
  $(`.pergunta${props.id} .opcao${value}`).addClass("active");
};
</script>

<template>
  <div :class="`pergunta pergunta${id}`">
    <div class="titulo text-center">{{ data.titulo }}</div>
    <div class="opcoes">
      <button
        v-for="(o, i) in data.opcoes"
        :key="o"
        type="button"
        :class="`btn opcao opcao${i}`"
        :Value="i"
        @click="selectOption(i)"
      >
        {{ o }}
      </button>
    </div>
  </div>
</template>
