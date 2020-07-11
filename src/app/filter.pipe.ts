import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(list: any, term: any): any {

    if(term === undefined)
    {
      return list;
    }
    else if(typeof(term)=="string")
    {
      return list.filter(function(place: any)
      {
        return place.to.toLowerCase().includes(term.toLowerCase());
      });
    }
    else if(typeof(term)=="number")
    {
      return list.filter(function(place: any)
      {
        return place.price < term;
      });
    }
  }
}
