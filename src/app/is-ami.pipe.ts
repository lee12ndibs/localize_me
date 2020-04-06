import { Pipe, PipeTransform } from '@angular/core';
import { User } from './modeles/user';

@Pipe({
  name: 'isAmi'
})
export class IsAmi implements PipeTransform {
    transform(user: User, id_ami: number, args?: any): any {
      return this.isAmi(user, id_ami);
    }
    isAmi(user, id_ami){
      let is_ami = false;
        user.amis.forEach(element => {
            if(id_ami == element)
            {
              
              is_ami = true;
            }
                  
        });
        return is_ami;
    }
}