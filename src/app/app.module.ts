import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerService } from './Services/flower.service';
import { HttpClientModule } from '@angular/common/http';
import { MyorderComponent } from './myorder/myorder.component';

@NgModule({
  declarations: [
    AppComponent,
    MyorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FlowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
