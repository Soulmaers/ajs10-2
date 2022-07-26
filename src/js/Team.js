export default class Team {
  constructor(name) {
    this.name = name;
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж есть');
    }
    this.members.add(member);
  }

  * [Symbol.iterator]() {
    const teamArr = this.members;

    for (let i = 0; i <= teamArr.length; i += 1) {
      yield teamArr[i];
    }
  }
}
