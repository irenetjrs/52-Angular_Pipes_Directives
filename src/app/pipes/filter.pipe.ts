import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], args?: any): any {
    if (!users) 
    return users;
  
    return users.sort((a,b) => a.name.localeCompare(b.name));
  }

}
