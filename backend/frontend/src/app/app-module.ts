import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/partials/header/header';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Search } from './components/partials/search/search';
import { Tags } from './components/partials/tags/tags';
import { FoodPage } from './components/pages/food-page/food-page';
import { CartPage } from './components/pages/cart-page/cart-page';
import { Title } from './components/partials/title/title';
import { NotFound } from './components/partials/not-found/not-found';
import { HttpClientModule , HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from '@angular/common/http';
import { LoginPage } from './components/pages/login-page/login-page';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InputContainer } from './components/partials/input-container/input-container';
import { InputValidation } from './components/partials/input-validation/input-validation';
import { TextInput } from './components/partials/text-input/text-input';
import { DefaultButtton } from './components/partials/default-buttton/default-buttton';
import { RegisterPage } from './components/pages/register-page/register-page';
import { Loading } from './components/partials/loading/loading';
import { loadingInterceptor } from './shared/interceptor/loading-interceptor';
import { CheckoutPage } from './components/pages/checkout-page/checkout-page';
import { OrderItemsList } from './components/partials/order-items-list/order-items-list';
import { RouterModule } from '@angular/router';
import {  Mapcomponent } from './components/partials/map/map';
@NgModule({
  declarations: [
    App,
    Header,
    HomeComponent,
    Search,
    Tags,
    FoodPage,
    CartPage,
    Title,
    NotFound,
    LoginPage,
    InputContainer,
    InputValidation,
    TextInput,
    DefaultButtton,
    RegisterPage,
    Loading,
    CheckoutPage,
    OrderItemsList,
    Mapcomponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
   provideHttpClient(withInterceptors([loadingInterceptor]))
  ],
  bootstrap: [App]
})
export class AppModule { }
