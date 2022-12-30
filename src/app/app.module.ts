import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';
import { SliderModule } from 'primeng/slider';
import { AnimateModule } from 'primeng/animate';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

import { AppComponent } from './app.component';
import { BannerComponent } from './component/banner/banner.component';
import { GenerateComponent } from './component/generate/generate.component';
import { GenerateFormComponent } from './component/generate-form/generate-form.component';
import { GeneratedModalComponent } from './component/generated-modal/generated-modal.component';
import { GenerateFormSliderComponent } from './component/generate-form-slider/generate-form-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    GenerateComponent,
    GenerateFormComponent,
    GeneratedModalComponent,
    GenerateFormSliderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    StyleClassModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    InputSwitchModule,
    DividerModule,
    SliderModule,
    AnimateModule,
    DialogModule,
    TooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
