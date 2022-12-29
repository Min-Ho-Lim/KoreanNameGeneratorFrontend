import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { BannerComponent } from './component/banner/banner.component';
import { GenerateComponent } from './component/generate/generate.component';
import { GenerateFormComponent } from './component/generate-form/generate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GenerateComponent,
    GenerateFormComponent,
  ],
  imports: [BrowserModule, StyleClassModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
