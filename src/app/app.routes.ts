import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/system/home/home.component";
import {AutoVacuumCleanerComponent} from "./pages/products/auto-vacuum-cleaner/auto-vacuum-cleaner.component";
import {PageNotFoundComponent} from "./pages/system/page-not-found/page-not-found.component";
import {PrivacyPolicyComponent} from "./pages/system/support/privacy-policy/privacy-policy.component";
import {CookiePolicyComponent} from "./pages/system/support/cookie-policy/cookie-policy.component";
import {PublicOfferComponent} from "./pages/system/support/public-offer/public-offer.component";
import {DeliveryTermsComponent} from "./pages/system/support/delivery-terms/delivery-terms.component";
import {
  RechargeableFlashlightComponent
} from "./pages/products/rechargeable-flashlight/rechargeable-flashlight.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auto-vacuum-cleaner', component: AutoVacuumCleanerComponent },
  { path: 'rechargeable-flashlight', component: RechargeableFlashlightComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookie-policy', component: CookiePolicyComponent },
  { path: 'public-offer', component: PublicOfferComponent },
  { path: 'delivery-terms', component: DeliveryTermsComponent },
  { path: '**', component: PageNotFoundComponent },
];
