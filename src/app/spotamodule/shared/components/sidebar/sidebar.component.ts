import { Component, OnInit } from '@angular/core';
import { SpotaroomService } from '@app/spotamodule';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  types: any;
  selectedType = 'all';
  selectedSort = 'ascending';
  downloadJsonHref: any;


  constructor(private spotaroomService: SpotaroomService, private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.types = [
      { value: 'all', viewValue: 'All' },
      { value: 'apartments', viewValue: 'Apartments' },
      { value: 'rooms', viewValue: 'Rooms' },
      { value: 'studios', viewValue: 'Studios' },
      { value: 'residences', viewValue: 'Residences' }
    ];

    this.spotaroomService.listObs.subscribe(obj => {
      this.downloadJson(obj);
    });
  }

  setType(val: any) {
    this.spotaroomService.setPropertyType(val);
  }

  setSort(val: any) {
    this.spotaroomService.setSortType(val);
  }

  downloadJson(obj: any) {
    const theJSON = JSON.stringify(obj);
    const uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

}
