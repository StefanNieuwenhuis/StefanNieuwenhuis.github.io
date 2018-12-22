import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstSentence'
})
export class FirstSentencePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const pattern = new RegExp(/^.*?(?=(<span class=\"excerpt\"\>))/);
    const result = pattern.exec(value);
    return result !== null && result.length > 0 ? result[0] : value;
  }

}
