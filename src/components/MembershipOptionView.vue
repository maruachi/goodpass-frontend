<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const businessId = ref(route.params.businessId);

alert(businessId.value)
</script>

<template>
  <div>
    hello world
  </div>
  <div>
    businessId = {{ businessId }}
  </div>
</template>

<style scoped>

</style>