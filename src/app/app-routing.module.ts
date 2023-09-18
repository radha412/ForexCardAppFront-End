import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponentComponent } from './buy-component/buy-component.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginComponent } from './components/login/login.component';
import {AppComponent} from './app.component';                     
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { AllAdminsComponent } from './components/all-admins/all-admins.component';
import { AllForexTypeComponent } from './components/all-forex-type/all-forex-type.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { UpdateForexCardTypeComponent } from './components/update-forex-card-type/update-forex-card-type.component';
import { AddForexTypeComponent } from './components/add-forex-type/add-forex-type.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AllComplaintsComponent } from './components/all-complaints/all-complaints.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CustomerContactComponent } from './components/customer-contact/customer-contact.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { PaymentTransaction } from './dto/payment-transaction';
import { PaymentTranscationsComponent } from './components/payment-transcations/payment-transcations.component';
import { ForexCardFormComponent } from './components/forex-card-form/forex-card-form.component';
import { ForexPaymentComponent } from './components/forex-payment/forex-payment.component';
import { BuyComponent } from './components/buy/buy.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';

const routes: Routes = [
  {
    path:'buy',component:BuyComponentComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'userdashboard',component:UserDashboardComponent},
  {path:'buy',component:BuyComponentComponent},
  {path:'contactus',component:CustomerContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminhome',component: AdminHomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admins', component: AllAdminsComponent},
  {path: 'forextypes', component: AllForexTypeComponent},
  {path: 'complaints', component: AllComplaintsComponent},
  {path: 'forextype', component: AddForexTypeComponent},
  {path: 'admin', component: AddAdminComponent},
  {path: 'forextype/:id', component: UpdateForexCardTypeComponent},
  {path:'navadmin',component:NavAdminComponent},
  {path:'navuser',component:NavUserComponent},
  {path:'paymenttransaction', component:PaymentTranscationsComponent},
  {path:'verification', component:ForexCardFormComponent},
  {path:'makepayment',component:ForexPaymentComponent},
  {path:'buycard',component:BuyComponent},
  {path:'checkbalance',component:CheckBalanceComponent},
  {path:'**',component:NotfoundComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
