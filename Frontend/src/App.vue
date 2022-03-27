<script>
import DemoGrid from "./components/Grid.vue";
import HeroDetail from "./components/HeroDetail.vue";
import Calculator from "./components/Calculator.vue";

export default {
  components: {
    DemoGrid,
    HeroDetail,
    Calculator,
  },
  data: () => ({
    searchQuery: "",
    gridColumns: ["name", "race", "heroClass"],
    gridData: [],
    heroDetail: {},
  }),
  created() {
    this.getHeroList();
  },
  methods: {
    async getHeroList() {
      const heroList = "http://localhost:8077/api/v1/gateway/heroes/";
      this.gridData = await (await fetch(heroList)).json();
    },

    async getLevel() {
      const level = "http://localhost:8077/api/v1/gateway/heroes/";
      //this.gridData = await(await fetch(level)).json();
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
    <div class="flex-container">
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
      <div class="calculator">
        <Calculator>
        </Calculator>
      </div>
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
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

.flex-container {
  width: 40%;
  display: flex;
  flex-direction: column;
}

code {
  color: #f66;
}
</style>
