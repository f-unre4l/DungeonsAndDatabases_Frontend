<script>

export default {
  props:{
    details: {}
  }
};
</script>

<template>
  <div>
    <p>{{ this.details.name + " The " + this.details.race + " " + this.details.heroClass }}</p>
    <img v-bind:src="'data:image/png;base64,'+this.details.avatar" />
    <p>{{"Level: "+this.details.level+" ("+this.details.experience+") "+"HP: "+this.details.hitpoints}}</p>
    <p>{{"STR: "+this.details.strength+" ("+this.details.strengthModifier+")"}}</p>
    <p>{{"DEX: "+this.details.dexterity+" ("+this.details.dexterityModifier+")"}}</p>
    <p>{{"CON: "+this.details.constitution+" ("+this.details.constitutionModifier+")"}}</p>
    <p>{{"INT: "+this.details.intelligence+" ("+this.details.intelligenceModifier+")"}}</p>
    <p>{{"WIS: "+this.details.wisdom+" ("+this.details.wisdomModifier+")"}}</p>
    <p>{{"CHA: "+this.details.charisma+" ("+this.details.charismaModifier+")"}}</p>
  </div>
</template>

<style>
</style>
