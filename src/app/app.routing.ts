import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AboutComponent } from './about';
import { HomeComponent } from './home';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'route-one', loadChildren: './+route-one/route-one.module#RouteOneModule' },
  { path: 'route-two', loadChildren: './+route-two/route-two.module#RouteTwoModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [HomeComponent];