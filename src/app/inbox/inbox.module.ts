import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InboxRoutingModule } from "./inbox-routing.module";
import { EmailShowComponent } from "./email-show/email-show.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "../material/material.module";
import { EmailListComponent } from "./email-list/email-list.component";
import { PlaceHolderComponent } from "./place-holder.component";
import { EmailCreateComponent } from "./email-create/email-create.component";
import { EmailReplyComponent } from "./email-reply/email-reply.component";
import { EmailFormModalComponent } from "./email-form-modal/email-form-modal.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
	declarations: [
		EmailShowComponent,
		HomeComponent,
		EmailListComponent,
		PlaceHolderComponent,
		EmailCreateComponent,
		EmailReplyComponent,
		EmailFormModalComponent
	],
	imports: [
		CommonModule,
		InboxRoutingModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	]
})
export class InboxModule {}
