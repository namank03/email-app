import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/services/auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	singedIn$ = this.authService.singedIn$;
	constructor(private authService: AuthService) {}
	title = "email-app";

	ngOnInit() {
		this.authService.checkAuth().subscribe(() => {});
	}
}
