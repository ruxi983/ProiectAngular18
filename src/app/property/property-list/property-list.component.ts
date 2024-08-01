
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  property_status: any="SOLD";

  properties: any;

  constructor(private housingService: HousingService) { }

  ngOnInit(): void {
      this.housingService.getAllProperties().subscribe(
              data=>{
              this.properties=data;
               console.log(data);
             }, error =>{
              console.log(error);
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
