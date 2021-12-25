import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { ConfigurationFormComponent } from './configuration-form/configuration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: AppComponent}
]

@NgModule({
    declarations: [AppComponent, MainComponent, ConfigurationFormComponent],
    imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgbTypeaheadModule, RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
