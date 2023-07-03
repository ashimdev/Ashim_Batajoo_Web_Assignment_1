// Angular Imports
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Prime NG Imports
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';

// Component Declarations
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

// Helpers
import { UrlSanitizerPipe } from './url-sanitizer.pipe';

@NgModule({
    declarations: [
        AppComponent,
        AppTopbarComponent,
        NotfoundComponent,
        HomeComponent,
        LandingComponent,
        AboutMeComponent,
        ProjectsComponent,
        ServicesComponent,
        ContactComponent,
        UrlSanitizerPipe,
    ],
    imports: [
        // Angular Imports
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,

        // Prime NG Imports
        DividerModule,
        StyleClassModule,
        PanelModule,
        ButtonModule,
        ImageModule,
        CardModule,
        InputTextModule,
        InputMaskModule,
        InputTextareaModule,
        TooltipModule
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
