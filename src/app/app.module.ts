import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Xml0Component } from './xml0/xml0.component';
import { Xml1Component } from './xml1/xml1.component';
import { Xml2Component } from './xml2/xml2.component';

@NgModule({
  declarations: [
    AppComponent,
    Xml0Component,
    Xml1Component,
    Xml2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }