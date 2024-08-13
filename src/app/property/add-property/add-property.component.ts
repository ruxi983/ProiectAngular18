import { NgForOfContext } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm: NgForm;
  constructor(private router: Router) { }

  ngOnInit() {
    //this.addPropertyForm.controls['Name'].setValue('e.g: McConor John')
    setTimeout(()=>{
      this.addPropertyForm.controls['Name'].setValue('Default Value');
    },1000);
   
  }

  onBack()
  {
      this.router.navigate(['/']);
  }

  onSubmit(){
    console.log("Congrats, form submitted!");
    console.log(this.addPropertyForm);
  }

}
