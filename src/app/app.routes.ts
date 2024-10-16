import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/system/home/home.component";
import {AutoVacuumCleanerComponent} from "./pages/sites/auto-vacuum-cleaner/auto-vacuum-cleaner.component";
import {PageNotFoundComponent} from "./pages/system/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auto-vacuum-cleaner', component: AutoVacuumCleanerComponent },
  { path: '**', component: PageNotFoundComponent },
];
