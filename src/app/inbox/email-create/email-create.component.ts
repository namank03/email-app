import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { EmailFormModalComponent } from "../email-form-modal/email-form-modal.component";

@Component({
	selector: "app-email-create",
	templateUrl: "./email-create.component.html",
	styleUrls: ["./email-create.component.css"]
})
export class EmailCreateComponent {
	constructor(public dialog: MatDialog) {}

	openDialog(): void {
		const dialogRef = this.dialog.open(EmailFormModalComponent, {
			width: "500px",
			data: {}
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log("The dialog was closed with result = ", result);
			// get form data and send req to api
		});
	}
}
