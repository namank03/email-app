import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignOutComponent } from "./components/sign-out/sign-out.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";

const routes: Routes = [
	{ path: "", component: SignUpComponent },
	{ path: "sign-in", component: SignInComponent },
	{ path: "sign-out", component: SignOutComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
