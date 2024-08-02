import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  
  propertiesArray: Array<any> = [];

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<any> = [];
        (data as Array<IProperty>).forEach(element => {
            if(element!=null){
            propertiesArray.push(element);
        }}
        
      );
      
      //debugger;
      return propertiesArray;

        
        }
        //return propertiesArray;
      )
    )
    }
    // data =>{
    //  debugger;
      //this.propertiesArray=data;
   // }
  }
