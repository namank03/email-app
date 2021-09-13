import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth/services/auth.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
	singedIn$ = this.authService.singedIn$;
	constructor(private authService: AuthService, private router: Router) {}
	title = "email-app";

	ngOnInit(): void {
		this.authService.checkAuth().subscribe((val) => {
			if (val.authenticated)
				this.router.navigateByUrl("/inbox").catch((err) => console.log(err));
		});
	}
}
