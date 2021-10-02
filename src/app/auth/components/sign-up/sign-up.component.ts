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
import { MatchPassword } from "../../validators/match-password";
import { UniqueUsername } from "../../validators/unique-username";

@Component({
	selector: "app-sign-up",
	templateUrl: "./sign-up.component.html",
	styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent {
	constructor(
		private uniqueUser: UniqueUsername,
		private matchPassword: MatchPassword,
		private authService: AuthService,
		private router: Router
	) {}

	debug = false;

	signUpForm = new FormGroup(
		{
			username: new FormControl(
				"",
				[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(60)
				],
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				[this.uniqueUser.validate]
			),
			password: new FormControl("", [
				Validators.required,
				Validators.minLength(5)
			]),
			passwordConfirmation: new FormControl("", [
				Validators.required,
				Validators.minLength(5)
			])
		},
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		{ validators: [this.matchPassword.validate] }
	);

	get username(): FormControl {
		return this.signUpForm.get("username") as FormControl;
	}

	get password(): FormControl {
		return this.signUpForm.get("password") as FormControl;
	}
	get passwordConfirmation(): FormControl {
		return this.signUpForm.get("passwordConfirmation") as FormControl;
	}

	onSubmit(formDirective: FormGroupDirective): void {
		this.authService.addUser(this.signUpForm.value).subscribe(
			() => {
				formDirective.resetForm();
				this.signUpForm.reset();
				this.router.navigateByUrl("/inbox").catch((err) => console.log(err));
			},
			(err: HttpErrorResponse) => {
				console.log("err while sign up", err);
				if (!err.status)
					this.signUpForm.setErrors({ noInternetConnection: true });
				else this.signUpForm.setErrors({ someUnknownError: true });
			}
		);
	}
}
