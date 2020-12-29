import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<string>, args: string): unknown {
    console.log(args)
    if(args.length != 0){
      let searchArray = [];
      searchArray =  value.filter((val)=>{
        return val.toLocaleLowerCase().match(args.toLocaleLowerCase())
      })
      console.log(searchArray)
      return searchArray.length != 0 ? searchArray : ['No match found']
    }
    else{
      return value;
    }
    
  }

}
