import Character from '../character.js';
import Bowman from '../bowman.js';
import Zombie from '../zombie.js';
import Daemon from '../daemon.js';
import Magician from '../magician.js';
import Undead from '../undead.js';
import Swordsman from '../swordsman.js';

test('shoud be create an object with type Zombie', () => {
  const expected = {
    name: 'Valerion',
    type: 'Zombie',
    health: 100,
    level: 1,
  };

  const result = new Character('Valerion', 'Zombie');
  expect(result).toEqual(expected);
});

test('should be error, if the name less then 2 symbols', () => {
  const expected = 'Ошибка! Имя должно быть строкой, а также быть длиной от 2 до 10 символов!';
  expect(() => new Character('V', 'Zombie')).toThrow(expected);
});

test('should be error, if the name more then 10 symbols', () => {
  const expected = 'Ошибка! Имя должно быть строкой, а также быть длиной от 2 до 10 символов!';
  expect(() => new Character('Valerionnnn', 'Zombie')).toThrow(expected);
});

test('should be error, if the this type note exist', () => {
  const expected = 'Ошибка! Такого типа персонажа не существует!';
  expect(() => new Character('Valerion', 'Rogue')).toThrow(expected);
});

test('should be create a new object Zombie', () => {
  const expected = {
    name: 'Valerion',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const result = new Zombie('Valerion');
  expect(result).toEqual(expected);
});

test('should be create a new object Bowman', () => {
  const expected = {
    name: 'Valerion',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const result = new Bowman('Valerion');
  expect(result).toEqual(expected);
});

test('should be create a new object Daemon', () => {
  const expected = {
    name: 'Valerion',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const result = new Daemon('Valerion');
  expect(result).toEqual(expected);
});

test('should be create a new object Magician', () => {
  const expected = {
    name: 'Valerion',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const result = new Magician('Valerion');
  expect(result).toEqual(expected);
});

test('should be create a new object Swordsman', () => {
  const expected = {
    name: 'Valerion',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const result = new Swordsman('Valerion');
  expect(result).toEqual(expected);
});

test('should be create a new object Undead', () => {
  const expected = {
    name: 'Valerion',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const result = new Undead('Valerion');
  expect(result).toEqual(expected);
});
