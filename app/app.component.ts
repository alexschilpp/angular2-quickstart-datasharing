import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{title}}</h1>
             <component-a (clicked)='handleComponentClick($event)'></component-a>
             <br /><br />
             <hr/>
             <component-b (clicked)='handleComponentClick($event)'></component-b>
             <br /><br />
             <hr/>
             <p *ngIf="componentTitleThatHasClicked">{{componentTitleThatHasClicked}} clicked</p>`,
})

export class AppComponent {

  private title: string = "Angular2";
  private componentTitleThatHasClicked: string;

  constructor() {  }

  handleComponentClick(componentTitle: any) {
    this.componentTitleThatHasClicked = componentTitle;
  }


}
