export default class Team {
  constructor() {
    this.enemyHeroes = [];
  }

  addEnemyHero(enemyHero) {
    this.enemyHeroes.push(enemyHero);
  }

  * [Symbol.iterator]() {
    for (const heroes of this.enemyHeroes) {
      yield heroes;
    }
  }
}
