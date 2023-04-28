import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AnalitycsComponent } from './analitycs/analitycs.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { MapsComponent } from './maps/maps.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CalandrierComponent } from './calandrier/calandrier.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { LandingComponent } from './landing/landing.component';
import { LikeComponent } from './like/like.component';
import { PostComponent } from './post/post.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { InvitComponent } from './invit/invit.component';
import { DonComponent } from './don/don.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      // { path: '', component: LayoutComponent },

      { path: 'crypto', component: AnalitycsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'calandrier', component: CalandrierComponent },
      { path: 'shop', component: CheckoutComponent },
      { path: 'checkout', component: ReclamationComponent },
      {path:'home',component:HomeComponent},
{path:'like',component:LikeComponent},
{path:'poste',component:PostComponent},
{path:'alarme',component: LoginComponent},
{path:'appointment',component:HomeComponent},
{path:'event',component:EventComponent},
{path:'invit',component:InvitComponent},
{path:'don',component:DonComponent},
{path:'login',component:LoginComponent},
     
     
    ]
    
  },

  { path: 'auth', component: AuthComponent },
  { path: 'landing', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
