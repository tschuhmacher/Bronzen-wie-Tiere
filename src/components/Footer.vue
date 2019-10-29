<template>
  <footer class="custom-layout">
    <div class="footer__menu">
      <router-link to="/model">{{content.menu.objects}}</router-link>
      <router-link to="/exhibition">{{content.menu.exhibition}}</router-link>
      <router-link class="footer__impressum" to="/about">{{content.menu.about}}</router-link>
      <router-link class="footer__impressum"to="/coop">{{content.menu.coop}}</router-link>
      <router-link class="footer__impressum" to="/impressum">{{content.menu.impressum}}</router-link>
    </div>
    <div class="divider"/>
    <div class="footer__logos">
      <v-img :src="`${publicPath}img/SMB_Logo_PMS_SC.svg`" :contain="true" :aspect-ratio="2.5/1" class="white"/>
      <v-img :src="`${publicPath}img/museum4punkt0_blk.svg`" :contain="true" :aspect-ratio="2.5/1" class="white"/>
      <v-img :src="`${publicPath}img/BKM_Fz_2017_WebSVG_de.svg`" :contain="true" :aspect-ratio="4/3" class="white"/>
    </div>
  </footer>
</template>

<script>
export default {
  name: "mainFooter",
  props: {
    content: Object
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style scoped lang="scss">
.footer__impressum {
  //creates a line-break wherever a line-break appears in the code, but ignores the extra whitespace (tabs and spaces etc.).
  white-space: pre-line;
}
footer {
  margin-top: 2em;
}
.footer__menu {
  margin: 2em 0;
  border-top: 3px solid #131616;
  padding-top: 0.7em;
  display: inline-flex;
  flex-direction: column;
  a {
    font-weight: bold;
    font-size: 1.3em;
    margin: 0.2em 0;
    line-height: 1.3em;
    color: #131616;
  }
}
.footer__logos {
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  > div {
    margin-top: 1em;
    @media (min-width: 768px) {
      margin-right: 1em;
    }
  }
}
.divider {
  background-color: #131616;
  height: 3px;
}
</style>
