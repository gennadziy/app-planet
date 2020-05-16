import {Component} from '@angular/core';
import {PlanetService} from './service/planet.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PlanetService]
})
export class AppComponent {

}
