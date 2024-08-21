import { NgForOfContext } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  // SellRent = '1';
  // tmpProp={};

  //Will come from masters
  propertyTypes: Array<string> = ['House','Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  gatedTypes: Array<string> = ['Yes','No'];
  moveTypes: Array<string> = ['East','West', 'North','South'];

  propertyView = {};
  
  constructor(private router: Router) { }

  ngOnInit() {
    // //this.addPropertyForm.controls['Name'].setValue('e.g: McConor John')
    setTimeout(()=>{
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    });
    
  }

  onBack()
  {
      this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Congrats, form submitted!");
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active = true;
  }

}
