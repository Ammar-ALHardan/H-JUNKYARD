import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { SubscrribeComponent } from 'src/app/components/subscrribe/subscrribe.component';
import { HeroSectionComponent } from 'src/app/components/hero-section/hero-section.component';



@NgModule({
  declarations: [
    ContactUsComponent,
    SubscrribeComponent,
    HeroSectionComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
