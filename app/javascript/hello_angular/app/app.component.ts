import { Component } from '@angular/core';

import { AppService } from './app.service';


@Component({
  selector: 'hello-angular',
  template: `<table class='table table-striped'>
              <tbody>              
                <tr *ngFor="let message of messages | keyvalue">            
                  <h1>{{message.key}}</h1>
                </tr>
              </tbody>
            </table>`,
  providers: [ AppService ],

})
export class AppComponent {
  messages = ['Angular!', '2', '3'];

  constructor(private appService: AppService) {}

  getData() {
      this.appService.getData()
        .subscribe(
            data => {
                      this.messages = data.bpi;
                      console.log(this.messages);
                     }
        ); 
  }


  ngOnInit(){
    this.getData();
  }
}
