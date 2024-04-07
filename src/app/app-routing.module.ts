import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetComponent } from './Components/reset/reset.component';
import { LoginComponent } from './Components/login/login.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { ReviewComponent } from './Components/review/review.component';
import { HomeComponent } from './Components/home/home.component';
import { BookComponent } from './Components/book/book.component';
import { AuthGuard } from './AuthGuardForHome/authguard.guard';
import { ViewComponent } from './Components/view/view.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderComponent } from './Components/order/order.component';

const routes: Routes = [
  {path:'reset',component:ResetComponent},
  {path:'login',component:LoginComponent},
  {path:'toolbar',component:ToolbarComponent},
  {path:'review',component:ReviewComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'book',component:BookComponent},
  {path:'view/:id',component:ViewComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cart',component:CartComponent},
  {path:'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
