import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BusinessContactListComponent } from './business-contact-list/business-contact-list.component';
import { BusinessContactEditPageComponent } from './business-contact-edit-page/business-contact-edit-page.component';

@NgModule({
    imports: [
        RouterModule.forRoot([  
            { path: "", redirectTo: "home", pathMatch: 'full' }, 
            { path: 'home', component: HomeComponent },
            { path: 'aboutMe', component: AboutMeComponent },
            { path: 'projects', component: ProjectsComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'businessContact', component: BusinessContactListComponent },
            { path: 'businessContact/create', component: BusinessContactEditPageComponent },
            { path: 'businessContact/:businessContactID', component: BusinessContactEditPageComponent },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
