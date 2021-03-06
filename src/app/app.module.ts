import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { FuseSampleModule } from './main/content/sample/sample.module';
import { ProjectsModule } from './main/content/projects/projects.module';
import { AppService } from './app.service';
import { ProjectsService } from './main/content/projects/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
} from "angular5-social-login";
// Configs
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("Your-Facebook-app-id")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("Your-Google-Client-Id")
        },
      ]
  );
  return config;
}

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'sample'
    },
    {
        path      : 'projects',
        redirectTo: '/projects'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,
        FuseSampleModule,
        ProjectsModule,
        SocialLoginModule
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        ProjectsService,
        AppService,
        FuseNavigationService,
        {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
