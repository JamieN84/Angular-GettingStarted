import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({  // Decorator to defines the below class as an Angular Module and passing the metadata defining the details of this module
  // Properties:
  declarations: [ 
    AppComponent,
    ProductListComponent
    ],  // Declares the AppComponent so that Angular can locate its selector
  imports: [ BrowserModule ],      // Imports the Browser Module so that the app runs correctly in the browser
  providers: [],                   // For Services
  bootstrap: [AppComponent]        // The starting componant for our application
})
export class AppModule { }    // The Class
