import { Injectable } from "@angular/core";
import { FormGroup, Validator } from "@angular/forms";

@Injectable({
	providedIn: "root"
})
export class MatchPassword implements Validator {
	validate = (form: FormGroup) => {
		const { password, passwordConfirmation } = form.controls;
		if (password.errors && passwordConfirmation.errors) return null;
		else if (
			password.dirty &&
			passwordConfirmation.dirty &&
			password.value !== passwordConfirmation.value
		)
			return { passwordNotMatched: true };
		return null;
	};
}
