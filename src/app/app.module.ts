import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ResetComponent } from './Components/reset/reset.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotComponent } from './Components/forgot/forgot.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { ReviewComponent } from './Components/review/review.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { BookComponent } from './Components/book/book.component';
import { DisplaybooksComponent } from './Components/displaybooks/displaybooks.component';
import { ViewComponent } from './Components/view/view.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { CartComponent } from './Components/cart/cart.component';
import { OrderComponent } from './Components/order/order.component';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [  
    AppComponent,
    ResetComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ToolbarComponent,
    ReviewComponent,
    HomeComponent,
    BookComponent,
    DisplaybooksComponent,
    ViewComponent,
    WishlistComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule,
    MatRadioModule,
    MatMenuModule
    

   

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
