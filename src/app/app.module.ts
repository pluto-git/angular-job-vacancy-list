import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SpinnerModule } from './shared/ui/spinner/spinner.module';
import { HttpLoadingInterceptor } from './shared/data-access/services/loading-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SpinnerModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
