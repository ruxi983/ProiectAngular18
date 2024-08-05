import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    //if we get an warning for the id a quick fix woulfd be: const id= 'id' and then for the next row replacing with [id];
    //+ is the equivalent to typing Number(this.route.snapshot.params['id']) to convert a string into a number;
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
        (params)=>{
          this.propertyId = +params['id'];
        }
    );
      
  }

  onSelectNext(){
      this.propertyId +=1;
      this.router.navigate(['property-detail/', this.propertyId],); //{relativeTo: this.route} in case we want to use it as a relative path but in this case in works as an absolute path with or without the /

  }


}
