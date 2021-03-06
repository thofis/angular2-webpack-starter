/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../custom_typings/ng2.d.ts" />

// Angular 2
import {Component, View} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';

// We use a folder if we want separate files
import {Home} from './home/home';
// Otherwise we only use one file for a component
import {Dashboard} from './dashboard';

// App: Top Level Component
@Component({
  selector: 'app' // without [ ] means we are selecting the tag directly
})
@View({
  // needed in order to tell Angular's compiler what's in the template
  directives: [ RouterOutlet, RouterLink, Home ],
  template: `
  <style>
    .title  { font-family: Arial, Helvetica, sans-serif; }
    .nav    { display: inline; list-style-type: none; padding: 0;  background-color: #F8F8F8; }
    .nav li { display: inline; }
    main    { padding: 0.5em; }
  </style>

  <h1 class="title">Hello {{ name }}</h1>

  <ul class="nav">
    <li><a router-link="home">Home</a></li>
    |
    <li><a router-link="dashboard">Dashboard</a></li>
  </ul>

  <main>
    <router-outlet></router-outlet>
  </main>
  `
})
@RouteConfig([
  { path: '/',          as: 'home',      component: Home },
  { path: '/dashboard', as: 'dashboard', component: Dashboard }
])
export class App {
  name: string;
  constructor() {
    this.name = 'Angular 2';
  }
}
