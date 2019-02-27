import { Component, OnInit } from '@angular/core';
import { SpotaroomService } from '@app/spotamodule';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  propIds: any;
  propInfo: any;
  paramsId: string;

  constructor(private spotaroomService: SpotaroomService, private router: Router) { }

  ngOnInit() {
    // subs for updating list

    this.spotaroomService.propertyTypeObs.subscribe(data => {
      console.log('changing property type :', data);
      this.updateList(data);
    });
    this.spotaroomService.sortTypeObs.subscribe(data => {
      if (this.propInfo) {
        this.sortProperties(this.propInfo, data);
        this.spotaroomService.setList(this.propInfo);
      }
    });
  }

  setList(type: string) {
    let cityParam = this.router.url.replace('/', '');
    cityParam === '' ? cityParam = 'madrid' : cityParam = cityParam;
    this.spotaroomService.getPropertiesId(type, cityParam).subscribe((data: any) => {
      console.log('ids: ', data);
      this.paramsId = this.spotaroomService.mapIds(data.data);
      this.spotaroomService.getPropertyInfo(this.paramsId).subscribe((details: any) => {
        console.log('propInfo: ', details);
        this.propInfo = details.data.homecards;
        this.sortProperties(this.propInfo, 'ascending');
        this.spotaroomService.setList(this.propInfo);
      });
    });
  }

  sortProperties(data: any, sortType: string) {
    if (sortType === 'ascending') {
      data.sort((a: any, b: any) => (a.pricePerMonth > b.pricePerMonth) ? 1 : ((b.pricePerMonth > a.pricePerMonth) ? -1 : 0));
    } else {
      data.sort((a: any, b: any) => (a.pricePerMonth < b.pricePerMonth) ? 1 : ((b.pricePerMonth < a.pricePerMonth) ? -1 : 0));
    }
  }

  updateList(type: string) {
    this.setList(type);
  }

}
