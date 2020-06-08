import Team from '../js/classes/Team';
import Person from '../js/classes/Person';

test('get thirst hero of game', () => {
  const heroBowman = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });

  const heroThief = new Person({
    name: 'Вор',
    type: 'Thief',
    health: 60,
    level: 1,
    attack: 50,
    defence: 5,
  });

  const heroAxeman = new Person({
    name: 'Тапорист',
    type: 'Axeman',
    health: 100,
    level: 1,
    attack: 30,
    defence: 20,
  });
  const newGame = new Team();
  newGame.addEnemyHero(heroBowman);
  newGame.addEnemyHero(heroThief);
  newGame.addEnemyHero(heroAxeman);
  const iterator = newGame[Symbol.iterator]();
  iterator.next();
  iterator.next();
  const result = iterator.next().value;
  expect(result).toEqual({
    name: 'Тапорист',
    type: 'Axeman',
    health: 100,
    level: 1,
    attack: 30,
    defence: 20,
  });
});

test('get done', () => {
  const heroBowman = new Person({
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  });

  const heroThief = new Person({
    name: 'Вор',
    type: 'Thief',
    health: 60,
    level: 1,
    attack: 50,
    defence: 5,
  });

  const newGame = new Team();
  newGame.addEnemyHero(heroBowman);
  newGame.addEnemyHero(heroThief);
  const iterator = newGame[Symbol.iterator]();
  iterator.next();
  iterator.next();
  const result = iterator.next().done;
  expect(result).toEqual(true);
});
