<script>
export default {
  props: {
    details: {},
  },
};
</script>

<template>
  <div @click="console.log(details.length)">
    <h2>
      {{
        this.details.name +
        " The Level " +
        this.details.level +
        " " +
        this.details.race +
        " " +
        this.details.heroClass
      }}
    </h2>
    <p>
      {{"XP: " + this.details.experience}}
    </p>
    <p>
      {{
        "HP: " +
        this.details.hitpoints
      }}
    </p>
    <img 
      v-bind:src="'data:image/png;base64,' + this.details.avatar"/>
    <br>
    <br>
    <table class="table-auto">
      <thead>
        <tr>
          <th>STR</th>
          <th>DEX</th>
          <th>CON</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.details.strength}}</td>
          <td>{{this.details.dexterity}}</td>
          <td>{{this.details.constitution}}</td>
        </tr>
        <tr>
          <td>{{this.details.strengthModifier}}</td>
          <td>{{this.details.dexterityModifier}}</td>
          <td>{{this.details.constitutionModifier}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table-auto">
      <thead>
        <tr>
          <th>INT</th>
          <th>WIS</th>
          <th>CHA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{this.details.intelligence}}</td>
          <td>{{this.details.wisdom}}</td>
          <td>{{this.details.charisma}}</td>
        </tr>
        <tr>
          <td>{{this.details.intelligenceModifier}}</td>
          <td>{{this.details.wisdomModifier}}</td>
          <td>{{this.details.charismaModifier}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
td, th {
  text-align: center;
}
</style>
