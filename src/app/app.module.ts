import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {SearchPipe} from './pipes/search.pipe';
import {DetailPlanetComponent} from './detail-planet/detail-planet.component';
import { ListComponent } from './list/list.component';
import {HoverDirective} from './directive/hover.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import {AboutAuthorComponent} from "./about-author/about-author.component";


@NgModule({
  declarations: [
    AppComponent,
    DetailPlanetComponent,
    SearchPipe,
    ListComponent,
    HoverDirective,
    AboutAuthorComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
