<template>
  <div class="model_list custom-layout">
    <ModelList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModelList from "@/components/ModelList.vue";

export default {
  name: "modelList",
  components: {
    ModelList
  }
};
</script>


<style scoped lang="scss">
.model_list {
  background: #fff;
  text-align: center;
}
</style>
