import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Planet} from '../model/planet';
import {PlanetService} from '../service/planet.service';
import {Router} from '@angular/router';
import {delay} from "rxjs/operators";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemsPer = 12
  p: number = 1;
  searchPlanet = '';
  private loading: boolean = true
  planets: Observable<Planet[]>;
  constructor(private planetService: PlanetService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }
  sort5(){
    this.itemsPer = 5
  }
  sort10(){
    this.itemsPer = 10
  }
  sort25(){
    this.itemsPer = 25
  }
  sort100(){
    this.itemsPer = 100
  }
  reloadData() {
    this.planets = this.planetService.getPlanetsList()
  }

  planetDetails(id: number) {
    this.router.navigate(['details', id]);
  }

}
