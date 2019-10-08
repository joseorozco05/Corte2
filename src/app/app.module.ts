import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { BlogComponent } from './blog/blog.component';
import { LogRegComponent } from './log-reg/log-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    BlogComponent,
    LogRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
