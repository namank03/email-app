import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
	@Input() singedIn$!: Observable<boolean | null>;
	constructor() {}

	ngOnInit(): void {}
}
