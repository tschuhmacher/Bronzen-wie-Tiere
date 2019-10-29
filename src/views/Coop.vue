<template>
  <div class="content__page">
    <div class="content__page-main custom-layout">
      <h1>{{content.menu.coop}}</h1>
      <div v-html="content.coop.content"/>
    </div>
    <Footer :content="content"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";

export default {
  name: "coop",
  props: {
    content: Object
  },
  components: { Footer }
};
</script>
