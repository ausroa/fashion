import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {CampaignComponent} from './views/campaign/campaign.component';
import {AboutPageComponent} from './views/about-page/about-page.component';
import {ShopPageComponent} from './views/shop-page/shop-page.component';
import {ProductPageComponent} from './components/product-page/product-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: 'shop/:name', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
