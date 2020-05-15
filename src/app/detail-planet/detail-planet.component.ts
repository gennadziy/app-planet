import { Component, OnInit } from '@angular/core';
import {PlanetService} from '../service/planet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Planet} from '../model/planet';

@Component({
  selector: 'app-detail-planet',
  templateUrl: './detail-planet.component.html',
  styleUrls: ['./detail-planet.component.scss']
})
export class DetailPlanetComponent implements OnInit {
  id: number;
  planet: Planet;

  constructor(private route: ActivatedRoute, private router: Router,
              private planetService: PlanetService) { }

  ngOnInit() {
    this.planet = new Planet();
    this.id = this.route.snapshot.params['id'];
    this.planetService.getPlanet(this.id)
      .subscribe(data => {
        this.planet = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['']);
  }
}
