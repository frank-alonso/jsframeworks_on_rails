import { Component } from '@angular/core';

import { AppService } from './app.service';


@Component({
  selector: 'hello-angular',
  template: `<table class='table table-striped'>
              <tbody>              
                <tr *ngFor="let message of messages | keyvalue">            
                  <td>{{message.value.code}}</td>
                  <td>{{message.value.rate}}</td>
                  <td>{{message.value.description}}</td>
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
