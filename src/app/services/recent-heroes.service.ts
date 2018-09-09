import { Injectable } from '@angular/core';

@Injectable()
export class RecentHeroesService {

  ids: Array<number> = [];  // accumulates heroes viewed

  constructor() { }

  add(id: number) {
    this.ids.push(id);  // adds id hero viewed
  }

  getList(): Array<number> {
    return this.ids;
  }
}
