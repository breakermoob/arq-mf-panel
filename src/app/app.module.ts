import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DataControlComponent } from './components/content/data-control/data-control.component';
import { GridComponent } from './components/content/grid/grid.component';
import { AmfLibBannerModule, AmfLibButtonModule, AmfLibCardModule, AmfLibLinkModule } from 'arq-mf-weblib';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DataControlComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AmfLibLinkModule,
    AmfLibButtonModule,
    AmfLibBannerModule,
    AmfLibCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
