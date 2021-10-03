/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
	username: string;
	subject?: string;
}

@Component({
	selector: "app-email-form-modal",
	templateUrl: "./email-form-modal.component.html",
	styleUrls: ["./email-form-modal.component.css"]
})
export class EmailFormModalComponent {
	username = `${this.data?.username}@angular-email.com`;

	constructor(
		public dialogRef: MatDialogRef<EmailFormModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) {}

	emailCreateForm = new FormGroup({
		to: new FormControl("", [
			Validators.required,
			Validators.minLength(5),
			Validators.email
		]),
		from: new FormControl({ value: this.username, disabled: true }),
		subject: new FormControl("", [
			Validators.required,
			Validators.minLength(5)
		]),
		content: new FormControl("", [
			Validators.required,
			Validators.minLength(20)
		])
	});

	get to(): FormControl {
		return this.emailCreateForm.get("to") as FormControl;
	}

	get from(): FormControl {
		return this.emailCreateForm.get("from") as FormControl;
	}

	get subject(): FormControl {
		return this.emailCreateForm.get("subject") as FormControl;
	}

	get content(): FormControl {
		return this.emailCreateForm.get("content") as FormControl;
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
