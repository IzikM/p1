import { HttpRequestInterceptor } from './services/http-request-interceptor';
import { BackEndService } from './services/back-end.service';
import { AuthService } from './services/auth.service';
import { OptionsService } from './services/options.service';
import { TstGuard } from './guards/tst.guard';
import { QaGuard } from './guards/qa.guard';
import { Kav2Guard } from './guards/kav2.guard';
import { ProductGuard } from './guards/product.guard';
import { ProductionGuard } from './guards/production.guard';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarlComponent } from './components/sidebarl/sidebarl.component';
import { SidebarrComponent } from './components/sidebarr/sidebarr.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VitalityComponent } from './components/vitality/vitality.component';
import { VitalityItemComponent } from './components/vitality-item/vitality-item.component';
import { ServicesComponent } from './components/services/services.component';
import { ServiceItemComponent } from './components/service-item/service-item.component';
import { OtpComponent } from './components/otp/otp.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { TemplateItemComponent } from './components/template-item/template-item.component';
import { TraceComponent } from './components/trace/trace.component';
import { TraceItemComponent } from './components/trace-item/trace-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConfigcntrlComponent } from './components/configcntrl/configcntrl.component';
import { ConfigItemComponent } from './components/config-item/config-item.component';
import { ServerSelectComponent } from './components/server-select/server-select.component';


// *Doc* Create routes
const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [ProductionGuard, Kav2Guard, QaGuard, TstGuard] },
  { path: 'Vitality', component: VitalityComponent, canActivate: [ProductionGuard] },
  { path: 'Services', component: ServicesComponent, canActivate: [ProductionGuard] },
  { path: 'Otp', component: OtpComponent, canActivate: [ProductionGuard] },
  { path: 'Templates', component: TemplatesComponent, canActivate: [ProductionGuard] },
  { path: 'TemplateItem', component: TemplateItemComponent, canActivate: [ProductionGuard] },
  { path: 'Trace', component: TraceComponent, canActivate: [ProductionGuard] },
  { path: 'Configcntrl', component: ConfigcntrlComponent, canActivate: [ProductionGuard] },
  { path: 'ageNotFoundComponent', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarlComponent,
    SidebarrComponent,
    LoginComponent,
    DashboardComponent,
    VitalityComponent,
    VitalityItemComponent,
    ServicesComponent,
    ServiceItemComponent,
    OtpComponent,
    TemplatesComponent,
    TemplateItemComponent,
    TraceComponent,
    TraceItemComponent,
    PageNotFoundComponent,
    ConfigcntrlComponent,
    ConfigItemComponent,
    ServerSelectComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [
    ProductionGuard,
    ProductGuard,
    Kav2Guard,
    QaGuard,
    TstGuard,
    OptionsService,
    AuthService,
    ServerSelectComponent,
    FlashMessagesModule,
    BackEndService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
