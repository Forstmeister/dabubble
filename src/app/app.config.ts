import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Environment } from '../../environments/environment';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideAnimations(),
    provideFirebaseApp(() =>
      initializeApp({
        "projectId": "dabubble-c42a0",
        "appId": "1:110416675868:web:2890ed0be91ff24ffe4bd9",
        "storageBucket": "dabubble-c42a0.appspot.com",
        "apiKey": Environment.API_KEY,
        "authDomain": "dabubble-c42a0.firebaseapp.com",
        "messagingSenderId": "110416675868"
      })
    ),
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    
  ]
};
