import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<h1>{{title}}</h1><h2>{{hero.name}} details</h2>
  <div><label>id: {{hero.id}}</label></div>
  <div><label>{{hero.name}}</label></div>`
})
export class AppComponent {
  title = 'Tour of heroes!';
  hero: Hero{
    id: 1,
    name:'Windstorm'
  };
}
export class Hero {
  id: number;
  name: string;
}