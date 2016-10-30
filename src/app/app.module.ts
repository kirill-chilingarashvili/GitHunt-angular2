
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'angular2-apollo';

import { EmojifyModule } from 'angular2-emojify';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { FEED_DECLARATIONS } from './feed';
import { COMMENTS_DECLARATIONS } from './comments';
import { SHARED_DECLARATIONS } from './shared';
import { routes } from './routes';
import { client } from './client';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    NewEntryComponent,
    ...FEED_DECLARATIONS,
    ...COMMENTS_DECLARATIONS,
    ...SHARED_DECLARATIONS
  ],
  entryComponents: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ApolloModule.withClient(client),
    EmojifyModule
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
