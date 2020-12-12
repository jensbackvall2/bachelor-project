import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanethuntStartpageComponent } from './planethunt-startpage/planethunt-startpage.component';
import { PlanetHuntTutorialComponent } from './planethunt-tutorial/planethunt-tutorial.component';
import { PlanethuntInventoryComponent } from './planethunt-inventory/planethunt-inventory.component';
import { PlanethuntSignupComponent } from './planethunt-signup/planethunt-signup.component';
import { PlanethuntUsernameFormComponent } from './planethunt-username-form/planethunt-username-form.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PlanethuntWordpuzzleComponent } from './planethunt-wordpuzzle/planethunt-wordpuzzle.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanethuntStartpageComponent,
    PlanetHuntTutorialComponent,
    PlanethuntInventoryComponent,
    PlanethuntSignupComponent,
    PlanethuntUsernameFormComponent,
    PlanethuntWordpuzzleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
