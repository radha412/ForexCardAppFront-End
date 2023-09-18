import { NgModule, isDevMode } from "@angular/core";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BuyComponentComponent } from "./buy-component/buy-component.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { PaymentComponent } from "./payment/payment.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { LoginComponent } from "./components/login/login.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component";
import { NavAdminComponent } from "./components/nav-admin/nav-admin.component";
import { AllAdminsComponent } from "./components/all-admins/all-admins.component";
import { AllForexTypeComponent } from "./components/all-forex-type/all-forex-type.component";
import { AddAdminComponent } from "./components/add-admin/add-admin.component";
import { UpdateForexCardTypeComponent } from "./components/update-forex-card-type/update-forex-card-type.component";
import { AddForexTypeComponent } from "./components/add-forex-type/add-forex-type.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { AllComplaintsComponent } from "./components/all-complaints/all-complaints.component";
import { CustomerContactComponent } from "./components/customer-contact/customer-contact.component";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { CardDetailsComponent } from "./components/card-details/card-details.component";
import { IntroComponent } from "./components/intro/intro.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { FooterComponent } from "./components/footer/footer.component";
import { UserDashboardComponent } from "./components/user-dashboard/user-dashboard.component";
import { NavUserComponent } from "./components/nav-user/nav-user.component";
import { PaymentTranscationsComponent } from "./components/payment-transcations/payment-transcations.component";
import { PaymentTransactionServiceComponent } from "./services/payment-transaction-service/payment-transaction-service.component";
import { FormBuilder } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { ForexCardFormComponent } from './components/forex-card-form/forex-card-form.component';
import { ForexPaymentComponent } from './components/forex-payment/forex-payment.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ForexCardSComponent } from './components/forex-card-s/forex-card-s.component';
import { BuyComponent } from './components/buy/buy.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    BuyComponentComponent,
    NavbarComponent,
    PaymentComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    NavAdminComponent,
    AllAdminsComponent,
    AllForexTypeComponent,
    AddAdminComponent,
    UpdateForexCardTypeComponent,
    AddForexTypeComponent,
    AdminHomeComponent,
    AllComplaintsComponent,
    CustomerContactComponent,
    NotfoundComponent,
    CardDetailsComponent,
    IntroComponent,
    FooterComponent,
    UserDashboardComponent,
    NavUserComponent,
    PaymentTranscationsComponent,
    PaymentTransactionServiceComponent,
    ForexCardFormComponent,
    ForexPaymentComponent,
    SideNavComponent,
    ForexCardSComponent,
    BuyComponent,
    CheckBalanceComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSelectModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: "registerWhenStable:30000",
    }),
  ],

  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
