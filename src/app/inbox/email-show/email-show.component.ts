import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { map, pluck, switchMap, tap } from "rxjs/operators";
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
			map((params: ParamMap) => params.get("id")!),
			switchMap((id: string) => this.emailService.getEmail(id))
		);
	}
}
