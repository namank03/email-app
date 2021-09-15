import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth/guard/auth.guard";
import { NotFoundComponent } from "./shared/not-found/not-found.component";

const routes: Routes = [
	{
		path: "inbox",
		canLoad: [AuthGuard],
		loadChildren: () =>
			import("./inbox/inbox.module").then((m) => m.InboxModule)
	},
	{ path: "**", component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
