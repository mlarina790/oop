import Character from './character.js';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type = 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}
