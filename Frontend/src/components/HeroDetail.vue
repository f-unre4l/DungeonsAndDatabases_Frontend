<script>
export default {
  props: {
    details: {},
  },
};
</script>

<template>
  <div>
    <a class="heroName">{{ this.details.name }}</a>
    <a>
      {{" - The " + this.details.race + " " + this.details.heroClass }}
    </a>
    <div class="flex">
      <div class="flexColumn">
        <p class="text">
          {{
            "Level: " +
            this.details.level +
            " (xp: " +
            this.details.experience +
            ")"
          }}
        </p>
        <p class="text">
          {{ "HP: " + this.details.hitpoints }}
        </p>
        <table class="text">
          <thead>
            <tr>
              <th>STR</th>
              <th>DEX</th>
              <th>CON</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ this.details.strength }} ({{
                  this.details.strengthModifier
                }})
              </td>
              <td>
                {{ this.details.dexterity }} ({{
                  this.details.dexterityModifier
                }})
              </td>
              <td>
                {{ this.details.constitution }} ({{
                  this.details.constitutionModifier
                }})
              </td>
            </tr>
          </tbody>
        </table>
        <table class="text">
          <thead>
            <tr>
              <th>INT</th>
              <th>WIS</th>
              <th>CHA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {{ this.details.intelligence }} ({{
                  this.details.intelligenceModifier
                }})
              </td>
              <td>
                {{ this.details.wisdom }} ({{ this.details.wisdomModifier }})
              </td>
              <td>
                {{ this.details.charisma }}({{ this.details.charismaModifier }})
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <img
        class="avatar"
        v-bind:src="'data:image/png;base64,' + this.details.avatar"
      />
    </div>
  </div>
</template>

<style>
.flex,
.flexColumn {
  display: flex;
}

.heroName{
  word-wrap: break-word;
}

.flex {
  justify-content: space-between;
}

.text {
  font-size: 150%;
}

a {
  font-size: 250%;
}

.avatar {
  margin: 2%;
  width: 400px;
}

.flexColumn {
  flex-direction: column;
}
td,
th {
  text-align: center;
}
</style>
