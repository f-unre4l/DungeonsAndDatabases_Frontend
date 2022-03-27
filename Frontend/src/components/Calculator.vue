<script>
export default {
  data: () => ({
    levelQuery: "",
    statModQuery: "",
    levelResult: -1,
    statModResult: -42,
    randomHealthChecked: false,
  }),
  methods: {
    async getLevel() {
      const level = "http://localhost:8077/api/v1/gateway/level/" + this.levelQuery;
      this.levelResult = await (await fetch(level)).text();
    },
    async getStatMod() {
      const statmod = "http://localhost:8077/api/v1/gateway/statmodifier/" + this.statModQuery;
      this.statModResult = await (await fetch(statmod)).text();
    },
  },
};
</script>

<template>
  <div class="level">
    <div>Calculate level from experience.</div>
    <input name="query" placeholder="experience" v-model="levelQuery" />
    <button @click="getLevel"> Calculate! </button>
    <div>Level: {{(levelResult<0?"?":levelResult)}}</div>
  </div>
  <br>
  <div class="statmod">
  <div>Calculate modifier from stat.</div>
    <input name="query" placeholder="stat" v-model="statModQuery" />
    <button @click="getStatMod"> Calculate! </button>
     <div>Modifier: {{(statModResult<-5?"?":statModResult)}}</div>
  </div>
</template>
