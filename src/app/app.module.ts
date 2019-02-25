import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotamoduleModule } from './spotamodule/spotamodule.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    SpotamoduleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
