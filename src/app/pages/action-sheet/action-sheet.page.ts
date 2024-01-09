import { Component, OnInit } from '@angular/core';
import { ActionSheetController, Config } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private config: Config) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          data: {
            action: 'delete',
          },
          handler: () => {
            console.log("Delete pressed.")
          }
        },
        {
          text: 'Share',
          // If the mode is ios we use the weird IOS icon, if not we use the usual share icon.
          icon: this.config.get("mode") == "ios" ? "share-outline" : "share-social-outline",
          data: {
            action: 'share',
          },
          handler: () => {
            console.log("Share pressed.")
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          cssClass: 'vermelho',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log("Cancel pressed.")
          }
        },
      ],
    });

    await actionSheet.present();
  }
  
  ngOnInit() {
  }

}
