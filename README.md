Angular push notifications - Serve para ionic também

$ ng add @angular/pwa
$ ng add @angular/fire

Criar projeto no firebase e pegar as configurações, salvando no Enviroments em uma variável "firebase";
Criar na pasta raíz do projeto o arquivo: firebase-messaging-sw.js e adicionar dentro dele as configurações do firebase na seguinte maneira
    importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
    importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

    firebase.initializeApp({
        apiKey: "AIzaSyAndmQzAbeA-doUYfqg0Ye6Ag6VFBP7OlI",
        authDomain: "easy-f3601.firebaseapp.com",
        databaseURL: "https://easy-f3601.firebaseio.com",
        projectId: "easy-f3601",
        storageBucket: "easy-f3601.appspot.com",
        messagingSenderId: "907960156016",
        appId: "1:907960156016:web:f21de964a3e85499ded9b5",
        measurementId: "G-RWQJ7N3J1R"
    });

    const messaging = firebase.messaging();

Criar na pasta raíz do projeto o arquivo: combined-sw.js e adicioanr dentro dele os scripts de manifesto
    importScripts('ngsw-worker.js');
    importScripts('firebase-messaging-sw.js');

Alterar o apontamento em app.module.ts de ngsw-worker para combined-sw
No arquivo, angular.json, adicionar as seguintes linhas no caminho: projects.architect.build.assets.
    "src/combined-sw.js",
    "src/firebase-messaging-sw.js"    

No arquivo manifest.webmanifest, adicione o parâmetro:
    "gcm_sender_id": "103953800507",

No arquivo app.module, adicione as seguintes importações
    import { AngularFireModule } from '@angular/fire/compat';
    import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';

    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireMessagingModule
    ],


As funções encontram-se no service messaging e o envio está no insomnia