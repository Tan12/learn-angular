import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent }   from './home.component';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';

import {homeRoutes} from './home.routes';

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        OnlineContactComponent,
        SocialChannelComponent
    ],
    providers: [],
})
export class HomeModule { }
