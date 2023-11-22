import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boldText'
})
export class BoldTextPipe implements PipeTransform {

  transform(value: string): string
  {
    return value.replace(/ConnectX/g, '<strong>ConnectX</strong>');
  }

}
