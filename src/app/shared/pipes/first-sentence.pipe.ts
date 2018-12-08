import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstSentence'
})
export class FirstSentencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const pattern = new RegExp(/.*?(\.)(?=\s[A-Z])/);
    return pattern.exec(value)[0];
  }

}
