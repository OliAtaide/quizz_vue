<script setup>
const props = defineProps(["data", "index"]);
</script>

<template>
  <div
    class="card-level btn"
    :class="`card-level-${props.index}`"
    :data-index="props.index"
  >
    <div class="card-body">
      <img :src="require(`@/assets/imgs/${props.data.imagem}.png`)" >
      <div class="card-text">
        <strong>{{ props.data.titulo }}</strong>
        {{ props.data.texto }}
      </div>
    </div>
  </div>
</template>