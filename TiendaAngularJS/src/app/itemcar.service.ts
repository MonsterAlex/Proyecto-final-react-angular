import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ItemcarService{
  constructor(private itemcar:Http){

  }

  getDatos(){
    return
    this.itemcar.get('https://tienda-reactjs.firebaseio.com/.json')
    .map((response: Response) => response.json())
  }
}

/////crear una base de datos diferente
