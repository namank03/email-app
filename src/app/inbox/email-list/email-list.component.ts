import { Component } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged, switchMap, tap } from "rxjs/operators";
import { EmailService, EmailSummary } from "../services/email.service";

@Component({
	selector: "app-email-list",
	templateUrl: "./email-list.component.html",
	styleUrls: ["./email-list.component.css"]
})
export class EmailListComponent {
	selectedId = new Subject<string>();
	emails$!: Observable<EmailSummary[]>;

	selectedEmail$ = this.selectedId.pipe(
		distinctUntilChanged(),
		tap((val) => console.log("value inside tap", val)),
		switchMap((email_id: string) => this.emailService.getEmail(email_id))
	);

	constructor(private emailService: EmailService) {
		this.emails$ = this.emailService.getEmails();
	}
}
