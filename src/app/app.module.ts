import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components';

import { AuthService } from './services';

const config = {
  apiKey: 'AIzaSyCPAgxBZffWJ52nBNYB2Rz-mQOQlkJmZVQ',
  authDomain: 'marquis-e2970.firebaseapp.com',
  databaseURL: 'https://marquis-e2970.firebaseio.com',
  projectId: 'marquis-e2970',
  storageBucket: 'marquis-e2970.appspot.com',
  messagingSenderId: '502258135589'
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
