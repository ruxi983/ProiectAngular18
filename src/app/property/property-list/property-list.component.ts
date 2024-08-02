
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  property_status: any="SOLD";

  properties: Array <IProperty> =  [];

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
      this.housingService.getAllProperties().subscribe(
              data=>{
                debugger;
              this.properties=data;
                console.log(data);
             }, error => {
                  console.log('httperror:');
             }
      )
      // this.http.get('data/properties.json').subscribe(
      //   data=>{
      //     this.properties=data;
      //     console.log(data)
      //   }
      // );
  }

}
