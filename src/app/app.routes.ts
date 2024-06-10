import { Routes } from '@angular/router';
import { AnimalViewComponent } from './views/animal-view/animal-view.component';
import { ChevalViewComponent } from './views/cheval-view/cheval-view.component';
// import { ChienViewComponent } from './views/chien-view/chien-view.component';
import { ChevalDetailComponent } from './views/cheval-detail/cheval-detail.component';

export const routes: Routes = [
  //{ path: '',   redirectTo: '/animal', pathMatch: 'full' },
  { path: 'animal', component: AnimalViewComponent },
  { path: 'cheval', component: ChevalViewComponent },
  // { path: 'chien', component: ChienViewComponent }
  { path: 'chien', loadComponent: () => import('./views/chien-view/chien-view.component').then(mod => mod.ChienViewComponent)},
  { path: 'cheval/:id', loadComponent: () => import('./views/cheval-detail/cheval-detail.component').then(mod => mod.ChevalDetailComponent)},

];
