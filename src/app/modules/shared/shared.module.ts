import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MultiTranslateHttpLoader } from "ngx-translate-multi-http-loader";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// AoT requires an exported function for factories  
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    { prefix: "./assets/translate/", suffix: ".json" },
  ]);
}

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    BrowserAnimationsModule,
  ]
})
export class SharedModule { }
