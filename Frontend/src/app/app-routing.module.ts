import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  {path:"onboarding", component:OnboardingComponent},
  {path:"details", component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
