import { UniversalService } from './../universal.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {
  sectionName;
  title: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private httpUniversal: UniversalService) { }

  ngOnInit() {
    this.sectionName = this.route.snapshot.params['section'];
    this.route.params.subscribe(section=>{

      this.httpUniversal.getUniversal('section/'+section.section).subscribe(data => {
        this.title = data.title;
      }, err => {
        this.router.navigate(['/404']);
      })
    })
  
  }
  goBack(): void {
    this.location.back();
  }

}
