import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ListComponent } from './shared/components/list/list.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';


// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from './shared/components/card/card.component';
import {MatSelectModule} from '@angular/material/select';

const appRoutes: Routes = [
  // { path: 'cities', component: CitiesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [ListComponent, SidebarComponent, HeaderComponent, HomeComponent, CardComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSelectModule
  ]
})
export class SpotamoduleModule { }
