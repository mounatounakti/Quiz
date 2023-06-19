import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,searchCategory:String) {
    if(value.length == 0 || searchCategory== ''){
      return value;
    }
    const categories = [];
    for (const category of value){
      if(category['name'] == searchCategory){
        categories.push(category);
      }
    }
    return categories;
  }

}
