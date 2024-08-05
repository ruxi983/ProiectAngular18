
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent implements OnInit{
  property_status: any="SOLD";

  properties: Array <IProperty> =  [];

  SellRent =  1;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
      if(this.route.snapshot.url.toString()) {
        this.SellRent = 2;// means we are on a rent-property url else we are on base url
      }
      this.housingService.getAllProperties(this.SellRent).subscribe(
              data=>{
               // debugger;
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
