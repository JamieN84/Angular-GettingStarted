import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({  // Decorator to defines the below class as an Angular Module and passing the metadata defining the details of this module
  // Properties:
  declarations: [ 
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
    ],  // Declares the AppComponent so that Angular can locate its selector
  imports: [ BrowserModule,
             FormsModule,
             HttpClientModule,
             RouterModule.forRoot([
                { path: 'products', component: ProductListComponent },
                { path: 'products/:id', component: ProductDetailComponent },
                { path: 'welcome', component: WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
             ])
    ],      // Imports the Browser Module so that the app runs correctly in the browser
  providers: [],                   // For Services
  bootstrap: [ AppComponent]         // The starting componant for our application
})
export class AppModule { }    // The Class
