import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LastNewComponent } from './last-new/last-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeSectionComponent,
    ResultadosComponent,
    SidenavComponent,
    LastNewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'la-mega'}),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
