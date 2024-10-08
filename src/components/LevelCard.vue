<script setup>
const props = defineProps(["data"]);
</script>

<template>
  <div class="col-sm-6">
    <div class="card card-level">
      <div class="card-body">
        <img :src="require(`@/assets/imgs/${props.data.imagem}.png`)" alt="" />
        <div class="card-text">
          <strong>{{ props.data.titulo }}</strong>
          {{ props.data.texto }}
        </div>
      </div>
    </div>
  </div>
</template>
