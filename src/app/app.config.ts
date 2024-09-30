import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"little-linguist-b0e60","appId":"1:428216163882:web:a4a2a606792fccd70fed53","storageBucket":"little-linguist-b0e60.appspot.com","apiKey":"AIzaSyB6ouG_Vt0L8E-1VpbXs6pjyWIyhh0u0kw","authDomain":"little-linguist-b0e60.firebaseapp.com","messagingSenderId":"428216163882"})), provideFirestore(() => getFirestore())]
};
