import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent{

  properties: Array<any> = [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000
    },
    {
      "Id":2,
      "Name":"Bucegi Cottage",
      "Type":"House",
      "Price":10990
    },
    {
      "Id":3,
      "Name":"Mozaceni Villa",
      "Type":"House",
      "Price":11000
    },
    {
      "Id":4,
      "Name":"Micro House",
      "Type":"House",
      "Price":11400
    },
    {
      "Id":5,
      "Name":"Macro House",
      "Type":"House",
      "Price":14300
    },
    {
      "Id":6,
      "Name":"Pearl White House",
      "Type":"House",
      "Price":18000
    }

]

}
