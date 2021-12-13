import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly title:string = "Guia de push notification";
  constructor(
    private readonly messagingService: MessagingService
  ) {
    this.listenForMessages();
  }

  listenForMessages() {
    this.messagingService.getMessages().subscribe(async (msg: any) => {
      console.log(`New message: ${msg}`)
    })
  }

  requestPermission() {
    this.messagingService.requestPermission().subscribe(
      async (token: any) => {
        console.log(`New Token: ${token}`)
      }),
      async(err: any) => {
        console.log(`Err when take token: ${err}`)
      }
  }

  async deleteToken() {
    this.messagingService.deleteToken();
    console.log("Token removido");
  }
}
