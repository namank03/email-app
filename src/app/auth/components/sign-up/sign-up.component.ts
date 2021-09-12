/* eslint-disable @typescript-eslint/unbound-method */
import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
		private matchPassword: MatchPassword
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

	onSubmit() {}
}
