import { UniversalService } from './../universal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const videojs;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menu:Array<any>;
  @Output() toggleSidebar = new EventEmitter();
  sidebarOpened = false;

  lista;
  adUrlStreaming="https://pubads.g.doubleclick.net/gampad/live/ads?sz=640x480%7C400x300&iu=/205320464/RCNRADIONUEVO/VIDEO/RCNRADIO_Video_EnVivo_DM&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=[description_url]&correlator=[timestamp]";
  constructor(public generalHttp:UniversalService) { }
  
  ngOnInit() {
    var player = videojs('videoPlayer');
    var options = {
      id: 'videoPlayer',
      adTagUrl: this.adUrlStreaming
    };
    player.ima(options);
    this.generalHttp.getUniversal('comments').subscribe((data)=>{
      console.log(data);
      this.lista=data;
    },(err)=>{
      console.log("algo Salio mal");
    });

  }
  toggleSidenav() {
    this.sidebarOpened = !this.sidebarOpened;
    this.toggleSidebar.emit(this.sidebarOpened);
  }
}
