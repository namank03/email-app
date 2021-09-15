import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { distinctUntilChanged, switchMap } from "rxjs/operators";
import { EmailService } from "../services/email.service";

@Component({
	selector: "app-email-list",
	templateUrl: "./email-list.component.html",
	styleUrls: ["./email-list.component.css"]
})
export class EmailListComponent {
	selectedId = new Subject<string>();
	emails$ = this.emailService.getEmails();

	selectedEmail$ = this.selectedId.pipe(
		distinctUntilChanged(),
		switchMap((email_id: string) => this.emailService.getEmail(email_id))
	);

	constructor(private emailService: EmailService) {}
}
