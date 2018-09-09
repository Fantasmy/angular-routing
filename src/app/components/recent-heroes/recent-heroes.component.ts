import { Component, OnInit } from '@angular/core';
import { RecentHeroesService } from '../../services/recent-heroes.service';

@Component({
  selector: 'app-recent-heroes',
  templateUrl: './recent-heroes.component.html',
  styleUrls: ['./recent-heroes.component.css']
})
export class RecentHeroesComponent implements OnInit {

  recentHeroes: Array<Number>

  constructor(private recentHeroesService: RecentHeroesService) { }

  ngOnInit() {
    this.recentHeroes = this.recentHeroesService.getList();
  }

}
