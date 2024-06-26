import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransferListComponent } from './transfers/transfer-list/transfer-list.component';
import { AppRoutingModule } from './app.routing.module';
import { TransferService } from './transfers/transfer.service';
import { InsertFormComponent } from './transfers/insert-form/insert-form.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransferListComponent,
    InsertFormComponent,
    NotImplementedComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }