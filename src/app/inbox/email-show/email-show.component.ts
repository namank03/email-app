import { Component, Input, OnInit } from "@angular/core";
import { Email } from "../services/email.service";

@Component({
	selector: "app-email-show",
	templateUrl: "./email-show.component.html",
	styleUrls: ["./email-show.component.css"]
})
export class EmailShowComponent implements OnInit {
	@Input() email!: Email | null;
	constructor() {}

	ngOnInit(): void {}
}
