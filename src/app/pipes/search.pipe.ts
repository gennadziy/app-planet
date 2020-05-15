import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name:'search'
})
export class SearchPipe implements PipeTransform {
  transform(planet, value) {
    return planet.filter(plane => {
      return plane.name_planet.toLowerCase().includes(value.toLowerCase());
      console.log(planet, planet);
    });
  }

}
