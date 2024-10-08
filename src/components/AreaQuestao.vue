<script setup>
import { ref, defineEmits } from "vue";

const props = defineProps(["data", "id"]);

const selectedValue = ref(null);

const emit = defineEmits(['update:selectedValue']);

const selectOption = (value) => {
  selectedValue.value = value;
  emit("update:selectedValue", value, props.id);
};
</script>

<template>
  <div class="pergunta">
    <div class="titulo text-center">{{ data.titulo }}</div>
    <div class="opcoes">
      <button
        v-for="(o, i) in data.opcoes"
        :key="o"
        type="button"
        class="btn opcao"
        @click="selectOption(i)"
      >
        {{ o }}
      </button>
    </div>
  </div>
</template>
