import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() menu: Array<any>;
  @Output() onRouteChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  changeRoute() {
    this.onRouteChange.emit();
  }
}
