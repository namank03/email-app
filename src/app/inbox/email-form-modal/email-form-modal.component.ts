import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
	animal: string;
	name: string;
}

@Component({
	selector: "app-email-form-modal",
	templateUrl: "./email-form-modal.component.html",
	styleUrls: ["./email-form-modal.component.css"]
})
export class EmailFormModalComponent {
	emailCreateForm = new FormGroup({
		to: new FormControl(""),
		from: new FormControl("naman@gmail.com"),
		subject: new FormControl("test-subject"),
		content: new FormControl("")
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

	constructor(
		public dialogRef: MatDialogRef<EmailFormModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) {
		console.log("modal data is", data);
	}

	onNoClick(): void {
		this.dialogRef.close();
	}
}
