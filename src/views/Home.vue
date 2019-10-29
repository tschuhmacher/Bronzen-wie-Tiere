<template>
  <div class="home">
    <header class="custom-layout">
      <h1>{{content.title.toUpperCase()}}</h1>
      <p>{{content.content}}</p>
      <div class="home__more">
        <router-link to="/exhibition">{{content.more}}</router-link>
      </div>
      <h2>{{content.titleList}}</h2>
    </header>
    <ModelList withImage/>
    <Footer :content="content"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModelList from "@/components/ModelList.vue";
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  props: {
    content: Object
  },
  components: {
    ModelList,
    Slider,
    Footer
  }
};
</script>

<style scoped lang="scss">
/* container for the home page */
.home {
  height: 100%;
  padding-bottom: 2em;
  background: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
header {
  color: #333;
  h1 {
    line-height: 1.2em;
  }
  p {
    line-height: 1.4em;
    font-size: 1.2em;
    margin-bottom: 0;
  }
}
h1 {
  font-size: 3em;
  padding: 5vh 0 3vh 0;
  font-weight: lighter;
  //display: inline;
  line-height: 1.2em;
}
.home__more {
  font-size: 1.2em;
  margin-top: 2em;
  margin-bottom: 2em;
  a {
    color: #333;
    font-weight: bold;
    border-bottom: 1px solid #333;
  }
}
.w-50 {
  width: 50%;
}

.home__bottom-menu {
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  a {
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1.8em;
    color: #333;
  }
}
footer {
  margin-top: 2em;
}
.home__logos {
  /* display: flex; */
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
</style>
