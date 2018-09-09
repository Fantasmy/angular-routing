import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecentHeroesService } from '../../services/recent-heroes.service';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.css']
})
export class HeroDetailPageComponent implements OnInit {
  heroId: string;


  constructor(private route: ActivatedRoute, private router: Router, private recentHeroesService: RecentHeroesService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.heroId = params.id;

      this.recentHeroesService.add(params.id);
    });
    setTimeout(() => {
      this.router.navigate(['/home'])
    }, 2500);
  }

}
