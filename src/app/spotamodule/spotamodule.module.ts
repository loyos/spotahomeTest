import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@app/spotamodule';
import { HeaderComponent } from '@app/spotamodule';
import { ListComponent } from '@app/spotamodule';
import { SidebarComponent } from '@app/spotamodule';


// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

const appRoutes: Routes = [
  // { path: 'cities', component: CitiesComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [ListComponent, SidebarComponent, HeaderComponent, HomeComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class SpotamoduleModule { }
