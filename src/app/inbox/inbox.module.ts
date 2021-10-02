import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InboxRoutingModule } from "./inbox-routing.module";
import { EmailShowComponent } from "./email-show/email-show.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "../material/material.module";
import { EmailListComponent } from "./email-list/email-list.component";
import { PlaceHolderComponent } from "./place-holder.component";
@NgModule({
	declarations: [
		EmailShowComponent,
		HomeComponent,
		EmailListComponent,
		PlaceHolderComponent
	],
	imports: [CommonModule, InboxRoutingModule, MaterialModule]
})
export class InboxModule {}
