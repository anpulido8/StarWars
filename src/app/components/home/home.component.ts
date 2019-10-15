import { Component, OnInit } from '@angular/core';

import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films: any;
  isLoaded : boolean;
  
  constructor(private starsw: StarwarsService) { }
  
  ngOnInit() {
    this.isLoaded=false;
    this.starsw.getFilms().subscribe((res: any) => {
      this.films = res.results;
      console.log('films', this.films);
    this.isLoaded=true;
    });
  }

}
