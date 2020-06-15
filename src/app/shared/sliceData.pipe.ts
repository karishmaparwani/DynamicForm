import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceData'
})
export class SliceDataPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any{
    
    return value.split('.')[1];
}

}
