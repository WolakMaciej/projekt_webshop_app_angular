import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartManagerComponent } from './components/admin/cart-manager/cart-manager.component';
import { OrderManagerComponent } from './components/admin/order-manager/order-manager.component';
import { ProductManagerComponent } from './components/admin/product-manager/product-manager.component';
import { UserManagerComponent } from './components/admin/user-manager/user-manager.component';
import { LoginComponent } from './components/public/login/login.component';
import { RegisterComponent } from './components/public/register/register.component';
import { FooterComponent } from './components/public/shered/footer/footer.component';
import { NavComponent } from './components/public/shered/nav/nav.component';
import { HeaderComponent } from './components/public/shered/header/header.component';
import { PageNotFoundComponent } from './components/public/shered/page-not-found/page-not-found.component';
import { ProductListComponent } from './components/public/shopping-cart/product-list/product-list.component';
import { ProductComponent } from './components/public/shopping-cart/product-list/product/product.component';
import { CartListComponent } from './components/public/shopping-cart/cart-list/cart-list.component';
import { CartComponent } from './components/public/shopping-cart/cart-list/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    CartManagerComponent,
    OrderManagerComponent,
    ProductManagerComponent,
    UserManagerComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ProductComponent,
    CartListComponent,
    CartComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
