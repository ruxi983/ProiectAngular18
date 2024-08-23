import { Component, Input, input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
    selector:'app-property-card',
    //template: `<h1>Sunt un card</h1>`,
    templateUrl: 'property-card.components.html',
    //styles: ['h1{font-weight:normal;}']
    styleUrl: 'property-card.component.css'

}
)
export class PropertyCardComponent implements OnInit{

constructor() {

    //this.property=[];
}

@Input() property : IProperty;
@Input() hideIcons: boolean;

@Input() property_status : any;

ngOnInit(): void {}
    

}
