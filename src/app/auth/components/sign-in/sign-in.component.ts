/* eslint-disable @typescript-eslint/unbound-method */
import { HttpErrorResponse } from "@angular/common/http";
import { Component } from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormGroupDirective,
	Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
	selector: "app-sign-in",
	templateUrl: "./sign-in.component.html",
	styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent {
	constructor(private authService: AuthService, private router: Router) {}

	signInForm = new FormGroup({
		username: new FormControl("", [
			Validators.required,
			Validators.minLength(5)
		]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(5)
		])
	});

	get username(): FormControl {
		return this.signInForm.get("username") as FormControl;
	}

	get password(): FormControl {
		return this.signInForm.get("password") as FormControl;
	}

	onSubmit(formDirective: FormGroupDirective): void {
		this.authService.signIn(this.signInForm.value).subscribe(
			() => {
				formDirective.resetForm();
				this.signInForm.reset();
				this.router.navigateByUrl("/inbox").catch((err) => console.log(err));
			},
			(err: HttpErrorResponse) => {
				console.log("err in signin", err);
				if (!err.status)
					this.signInForm.setErrors({ noInternetConnection: true });
				else if (err.error?.username || err.error?.password)
					this.signInForm.setErrors({ invalidCredentials: true });
				else this.signInForm.setErrors({ someUnknownError: true });
			}
		);
	}
}
