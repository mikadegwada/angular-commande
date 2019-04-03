import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatChipsModule,
} from '@angular/material';
import { ArticleListComponent } from './article-list/article-list.component';
import { AppServiceService } from './app-service.service';
import { ArticleManagerComponent } from './article-manager/article-manager.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CommandeComponent } from './commande/commande.component'
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatChipsModule
  ],
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleManagerComponent,
    ArticleFormComponent,
    CommandeComponent

  ],
  bootstrap: [AppComponent],
  providers: [AppServiceService]
})
export class AppModule { }
