type HitPoints = {
  maximum: number,
  remaining: number,
  temporary: number
}

type HitDice = {
  used: number,
  total: number,
  type: string
}

type DeathSaves = {
  successes: boolean[],
  failures: boolean[]
}

type Skill = {
  name: string,
  proficient: boolean,
  expert: boolean
}

type Attribute = {
  name: string,
  proficient: boolean
  value: number
  skills: Skill[]
}

type MartialProficiencies = {
  lightArmour: boolean,
  simpleWeapons: boolean,
  mediumArmour: boolean,
  martialWeapons: boolean,
  heavyArmour: boolean,
  shields: boolean
}

type WeaponAttack = {
  name: string,
  attackBonus: string,
  damage: string
}

export type ClassFeature = {
  name: string,
  description: string,
  levelRequirement: number
}

export default class Character {
  name: string
  race: string
  age: string
  height: string
  weight: string
  eyes: string
  skin: string
  hair: string
  scars:string
  distinguishingMarks:string
  background: string
  alignment: string
  experience: string
  level: number
  class: string
  subClass: string
  proficiency: number
  inspiration: number
  hitPoints: HitPoints
  hitDice: HitDice
  deathSaves: DeathSaves
  attributes: Attribute[] = []
  martialProficiencies: MartialProficiencies
  languages: string
  toolsAndOtherProficiencies: string
  armourClass: number
  initiative: number
  speed: number
  weaponsAndAttacks: WeaponAttack[]
  classFeautres: ClassFeature[]

  /**
   * This function calculates the modifier number for any attribute
   * @param {Number} attributeValue The full value of the attribute
   * @returns The modifier number from the input number
   */
  static getAttributeModifier(attributeValue: number): number {
    return Math.floor((attributeValue - 10) / 2);
  }

  static skillAttributes: [string, string][] = [
    [ 'athletics', 'strength' ],
    
    [ 'acrobatics', 'dexterity' ],
    [ 'sleightOfHand', 'dexterity' ],
    [ 'stealth', 'dexterity' ],

    [ 'arcana', 'intelligence' ],
    [ 'history', 'intelligence' ],
    [ 'investigatin', 'intelligence' ],
    [ 'nature', 'intelligence' ],
    [ 'religion', 'intelligence' ],

    [ 'animalHandling', 'wisdom' ],
    [ 'insight', 'wisdom' ],
    [ 'medicine', 'wisdom' ],
    [ 'perception', 'wisdom' ],
    [ 'survival', 'wisdom' ],

    [ 'deception', 'chasrisma' ],
    [ 'intimidation', 'chasrisma' ],
    [ 'performance', 'chasrisma' ],
    [ 'persuasion', 'chasrisma' ]
  ]

  /**
   * The constructor for the Character class
   * @param {Object} character The JSON object you wish to initialize the Character instance
   */
  constructor(character: any) {
    this.name = character?.name || ""
    this.race = character?.race || ""
    this.age = character?.age || ""
    this.height = character?.height || ""
    this.weight = character?.weight || ""
    this.eyes = character?.eyes || ""
    this.skin = character?.skin || ""
    this.hair = character?.hair || ""
    this.scars = character?.scars || ""
    this.distinguishingMarks = character?.distinguishingMarks || ""
    this.background = character?.background || ""
    this.alignment = character?.alignment || ""
    this.experience = character?.experience || ""
    this.level = character?.level || 1
    this.class = character?.class || ""
    this.subClass = character?.subClass || ""
    this.proficiency = character?.proficiency || 0
    this.inspiration = character?.inspiration || 0
    this.hitPoints = character?.hitPoints || {
      maximum: 0,
      remaining: 0,
      temporary: 0
    }
    this.hitDice = character?.hitDice || {
      used: 0,
      total: 0,
      type: "d6"
    }
    this.deathSaves = character?.deathSaves || {
      successes: [ false, false, false ],
      failures: [ false, false, false ]
    }
    this.attributes = character?.attributes || []
    this.martialProficiencies = character?.martialProficiencies || {
      lightArmour: false,
      simpleWeapons: false,
      mediumArmour: false,
      martialWeapons: false,
      heavyArmour: false,
      shields: false
    }
    this.languages = character?.languages || ""
    this.toolsAndOtherProficiencies = character?.toolsAndOtherProficiencies || ""
    this.armourClass = character?.armourClass || 10
    this.initiative = character?.initiative || 0
    this.speed = character?.speed || 30
    this.weaponsAndAttacks = character?.weaponsAndAttacks || []
    this.classFeautres = character?.classFeautres || ""

    return this
  }

  /**
   * This function calculates the skill modifier value for the requested skill name
   * @param {string} skillName The camel case name of the skill
   * @returns The correct skill modifier number for the requested skill
   */
  getProficiencyModifier(skillName: string): number {
    const attributeName: string = (Character.skillAttributes.find(skillAttribute => skillAttribute[0] === skillName) || [])[1] || '';
    const foundSkill: Skill|undefined = this.attributes.find(attribute => attribute.name === attributeName)?.skills.find(skill => skill.name === skillName)
    return foundSkill?.proficient ? this.proficiency * (foundSkill?.expert ? 2 : 1) : 0;
  }

  /**
   * This function calculates the passive perception
   * @returns The number for the character's passive perception
   */
  passivePerception(): number {
    return 10 + Character.getAttributeModifier(this.attributes.find(attribute => attribute.name === 'wisdom')?.value || 0) + this.getProficiencyModifier('perception')
  }

  /**
   * This function is used to calculate the passive insight the passive insight
   * @returns The number for the character's passive insight
   */
  passiveInsight(): number {
    return 10 + Character.getAttributeModifier(this.attributes.find(attribute => attribute.name === 'wisdom')?.value || 0) + this.getProficiencyModifier('insight')
  }

  /**
   * This function calculates the saving throw modifier of the requested attribute by name
   * @param {string} attributeName The attribute's name in camel case
   * @returns The saving throw modifier of the requested attribute
   */
  savingThrow(attributeName: string): number {
    return Character.getAttributeModifier(this.attributes.find(attribute => attribute.name === attributeName)?.value || 0)
  }

  /**
   * This function calculates the skill modifier number of the requested skill
   * @param {string} skillName The name of the skill in camel case
   * @returns The skill modifier number
   */
  skillModifier(skillName: string): number {
    const attributeName: string = (Character.skillAttributes.find(skillAttribute => skillAttribute[0] === skillName) || [])[1] || '';
    return Character.getAttributeModifier(this.attributes.find(attribute => attribute.name === attributeName)?.value || 0) + this.getProficiencyModifier(skillName)
  }
}
