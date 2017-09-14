import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { SitestatComponent } from '../sitestat/sitestat.component';

import {homeRoutes} from './home.routes';

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        OnlineContactComponent,
        SocialChannelComponent,
        SitestatComponent
    ],
    providers: [],
})
export class HomeModule { }
