import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TileServiceService {

  constructor(private http: HttpClient) { }

  addTile(tileFormValues){
    return this.http.post<any>('http://localhost:8000/api/tile', tileFormValues);
  }

  getAllTile(){
    return this.http.get<any>('http://localhost:8000/api/tile');
  }

  getTile(id){
    return this.http.get<any>('http://localhost:8000/api/getTile/'+ id);
  }

  editTile(id, tileFormValues){
    console.log(id, 'id');
    return this.http.post<any>('http://localhost:8000/api/editTile/'+id, tileFormValues);
  }

  removeTile(id){
    return this.http.delete<any>('http://localhost:8000/api/deleteTile/'+ id);
  }
}
