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

  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        (data as Array<IProperty>).forEach(element => {
            if( element != null && element.SellRent == SellRent ){
            propertiesArray.push(element);
        }}
        
      );
      
      return propertiesArray;

        
        }
        //return propertiesArray;
      )
    )
    }
    // data =>{
    
      //this.propertiesArray=data;
   // }
  }
