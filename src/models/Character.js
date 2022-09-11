import defaultCharacter from "../defaultCharacter.json"

class Character {
  static getAttributeModifier(attributeValue) {
    return Math.floor((attributeValue - 10) / 2);
  }

  static skillAttribute = {
    athletics: 'strength',
    
    acrobatics: 'dexterity',
    sleightOfHand: 'dexterity',
    stealth: 'dexterity',

    arcana: 'intelligence',
    history: 'intelligence',
    investigatin: 'intelligence',
    nature: 'intelligence',
    religion: 'intelligence',

    animalHandling: 'wisdom',
    insight: 'wisdom',
    medicine: 'wisdom',
    perception: 'wisdom',
    survival: 'wisdom',

    deception: 'chasrisma',
    intimidation: 'chasrisma',
    performance: 'chasrisma',
    persuasion: 'chasrisma'
  }

  constructor(character = defaultCharacter) {
    Object.keys(character).forEach(key => {
      if(typeof this[key] == 'function') {
        return;
      }

      this[key] = character[key];
    });
  }

  getSkillModifier(skill) {
    return this.attributes[Character.skillAttribute[skill]].skills[skill].proficient ? this.proficiency * (this.attributes[Character.skillAttribute[skill]].skills[skill].expert ? 2 : 1) : 0;
  }

  passivePerception() {
    return 10 + Character.getAttributeModifier(this.attributes.wisdom.value || 0) + this.getSkillModifier('perception')
  }

  passiveInsight() {
    return 10 + Character.getAttributeModifier(this.attributes.wisdom.value || 0) + this.getSkillModifier('insight')
  }

  savingThrow(attribute) {
    return Character.getAttributeModifier(this.attributes[attribute].value || 0)
  }

  skill(skill) {
    return Character.getAttributeModifier(this.attributes[Character.skillAttribute[skill]].value || 0) + this.getSkillModifier(skill)
  }
}

export default Character