import { Component, Input, input } from '@angular/core';

@Component({
    selector:'app-property-card',
    //template: `<h1>Sunt un card</h1>`,
    templateUrl: 'property-card.components.html',
    //styles: ['h1{font-weight:normal;}']
    styleUrl: 'property-card.component.css'

}
)
export class PropertyCardComponent{
@Input() property : any
    

}