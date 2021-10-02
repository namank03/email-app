import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Email, EmailService } from "../services/email.service";

@Component({
	selector: "app-email-show",
	templateUrl: "./email-show.component.html",
	styleUrls: ["./email-show.component.css"]
})
export class EmailShowComponent implements OnInit {
	email$!: Observable<Email>;
	constructor(
		private route: ActivatedRoute,
		private emailService: EmailService
	) {}

	ngOnInit() {
		this.email$ = this.route.paramMap.pipe(
			switchMap((params: ParamMap) =>
				this.emailService.getEmail(params.get("id")!)
			)
		);
	}
}
