import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

 
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'; 
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule} from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import {AvatarModule} from 'primeng/avatar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ButtonModule,
    DividerModule,
    InputTextModule,
    RippleModule,
    StyleClassModule,
    AvatarModule,
    InputSwitchModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
