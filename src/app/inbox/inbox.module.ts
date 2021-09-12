import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InboxRoutingModule } from "./inbox-routing.module";
import { EmailShowComponent } from "./email-show/email-show.component";
import { EmailListComponent } from "./email-list/email-list.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
	declarations: [EmailShowComponent, EmailListComponent, HomeComponent],
	imports: [CommonModule, InboxRoutingModule]
})
export class InboxModule {}
