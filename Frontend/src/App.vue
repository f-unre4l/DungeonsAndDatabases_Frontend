<script>
import DemoGrid from "./components/Grid.vue";
import HeroDetail from "./components/HeroDetail.vue";
import RequestService from "./services/RequestService.js";

export default {
  components: {
    DemoGrid,
    HeroDetail,
  },
  data: () => ({
    searchQuery: "",
    gridColumns: ["name", "race", "heroClass"],
    gridData: [],
    heroDetail: {},
  }),
  created() {
    // fetch on init
    this.getHeroList();
  },
  methods: {
    async getHeroList() {
      const heroList = "http://localhost:8077/api/v1/gateway/heroes/";
      this.gridData = await(await fetch(heroList)).json();
    },

    async getHeroDetail(id) {
      const heroDetail = "http://localhost:8077/api/v1/gateway/heroes/" + id;
      this.heroDetail = await (await fetch(heroDetail)).json();
    },
  },
};
</script>

<template>
  <div class="heroes">
    <div class="heroList">
      <form id="search">
        Search <input name="query" v-model="searchQuery" />
      </form>
      <DemoGrid
        :data="gridData"
        :columns="gridColumns"
        :filter-key="searchQuery"
        @heroClickEvent="getHeroDetail"
      >
        {{ this.getHeroList() }}
      </DemoGrid>
    </div>
    <div class="heroDetail">
      <HeroDetail :details="heroDetail"> </HeroDetail>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.heroes {
  height: 100vh;
  display: flex;
}

.heroList,
.heroDetail {
  overflow: auto;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.heroDetail {
  width: 60%;
}

.heroList {
  width: 40%;
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
