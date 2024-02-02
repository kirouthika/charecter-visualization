import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { CharecterListComponent } from './charecter-list/charecter-list.component';
import { CharecterDetailsComponent } from './charecter-details/charecter-details.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CharecterListComponent,
    CharecterDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatPaginatorModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
