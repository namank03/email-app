import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmailShowComponent } from "./email-show/email-show.component";
import { HomeComponent } from "./home/home.component";
import { PlaceHolderComponent } from "./place-holder.component";

const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		children: [
			{ path: "", component: PlaceHolderComponent },
			{ path: ":id", component: EmailShowComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class InboxRoutingModule {}
