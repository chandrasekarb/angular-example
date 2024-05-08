import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'; // Import HttpClientModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to the imports array
    HttpClientModule, // Add HttpClientModule to the imports array
    HttpClientXsrfModule.withOptions({
      cookieName: 'Pecan-Sandies',
      headerName: 'Top-Of-Page'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
