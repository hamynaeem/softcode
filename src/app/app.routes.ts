import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Services } from './services/services';
import { About } from './about/about';
import { Contact } from './contact/contact';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full' // important: ensures exact match of ''
  },
  {
    path: 'Home',
    component: Home
  },
  {
    path: 'Services',
    component: Services
  },
  {
    path: 'About',
    component: About
  },
  {
    path: 'Contact',
    component: Contact
  }
];
