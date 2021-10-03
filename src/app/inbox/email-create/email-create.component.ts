import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";
import { EmailFormModalComponent } from "../email-form-modal/email-form-modal.component";

@Component({
	selector: "app-email-create",
	templateUrl: "./email-create.component.html",
	styleUrls: ["./email-create.component.css"]
})
export class EmailCreateComponent {
	username!: string;
	constructor(public dialog: MatDialog, private authService: AuthService) {
		this.authService.username$.subscribe((val) => (this.username = val));
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(EmailFormModalComponent, {
			width: "500px",
			data: { username: this.username }
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log("The dialog was closed with result = ", result);
			// get form data and send req to api
		});
	}
}
