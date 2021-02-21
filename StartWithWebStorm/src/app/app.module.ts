import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GreenDreamTreeComponent } from './green-dream-tree/green-dream-tree.component';
import { HighlightDirective } from './highlight.directive';
import {TodosModule} from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreenDreamTreeComponent,
    HighlightDirective,

  ],
  imports: [
    BrowserModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
