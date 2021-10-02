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
	emails$!: Observable<EmailSummary[]>;

	constructor(private emailService: EmailService) {
		this.emails$ = this.emailService.getEmails();
	}
}
