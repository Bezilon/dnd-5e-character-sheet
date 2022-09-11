import defaultCharacter from "../defaultCharacter.json"

class Character {
  /**
   * This function calculates the modifier number for any attribute
   * @param {Number} attributeValue The full value of the attribute
   * @returns The modifier number from the input number
   */
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

  /**
   * The constructor for the Character class
   * @param {Object} character The JSON object you wish to initialize the Character instance
   */
  constructor(character = defaultCharacter) {
    Object.keys(character).forEach(key => {
      if(typeof this[key] == 'function') {
        return;
      }

      this[key] = character[key];
    });
  }

  /**
   * This function calculates the skill modifier value for the requested skill name
   * @param {string} skill The camel case name of the skill
   * @returns The correct skill modifier number for the requested skill
   */
  getSkillModifier(skill) {
    return this.attributes[Character.skillAttribute[skill]].skills[skill].proficient ? this.proficiency * (this.attributes[Character.skillAttribute[skill]].skills[skill].expert ? 2 : 1) : 0;
  }

  /**
   * This function calculates the passive perception
   * @returns The number for the character's passive perception
   */
  passivePerception() {
    return 10 + Character.getAttributeModifier(this.attributes.wisdom.value || 0) + this.getSkillModifier('perception')
  }

  /**
   * This function is used to calculate the passive insight the passive insight
   * @returns The number for the character's passive insight
   */
  passiveInsight() {
    return 10 + Character.getAttributeModifier(this.attributes.wisdom.value || 0) + this.getSkillModifier('insight')
  }

  /**
   * This function calculates the saving throw modifier of the requested attribute by name
   * @param {string} attribute The attribute's name in camel case
   * @returns The saving throw modifier of the requested attribute
   */
  savingThrow(attribute) {
    return Character.getAttributeModifier(this.attributes[attribute].value || 0)
  }

  /**
   * This function calculates the skill modifier number of the requested skill
   * @param {string} skill The name of the skill in camel case
   * @returns The skill modifier number
   */
  skillModifier(skill) {
    return Character.getAttributeModifier(this.attributes[Character.skillAttribute[skill]].value || 0) + this.getSkillModifier(skill)
  }
}

export default Character