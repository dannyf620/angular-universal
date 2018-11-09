import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { UniversalService } from './universal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularUniversalTest';
  menu: Array<any>;

  //sidemenu 
  filters: Observable<any>;
  recipes: Observable<Array<any>>;
  @ViewChild('lastNewsSidenav') lastNewsSidenav: MatSidenav;
  navMode = 'side';

  @ViewChild('sidenav') sidenav: MatSidenav;
  constructor(public generalHttp:UniversalService){
    this.generalHttp.getUniversal('header').subscribe(links=>{
      this.menu=links;
    },err=>{});
    
  }
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
