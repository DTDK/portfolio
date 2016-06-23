import { provideRouter, RouterConfig } from '@angular/router';

import { CCFormComponent }  from '../projects/form/form.component';
import { AppComponent, EmptyComponent } from '../app-component/app.component'

export const routes: RouterConfig = [
    { path: '', component: EmptyComponent },
    { path: 'creditcardform', component: CCFormComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];