import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "src/app/auth/services/auth.service";
import { EmailFormModalComponent } from "../email-form-modal/email-form-modal.component";
import { Email, EmailService } from "../services/email.service";

@Component({
	selector: "app-email-create",
	templateUrl: "./email-create.component.html",
	styleUrls: ["./email-create.component.css"]
})
export class EmailCreateComponent {
	username!: string;
	constructor(
		public dialog: MatDialog,
		private authService: AuthService,
		private emailService: EmailService
	) {
		this.authService.username$.subscribe((val) => (this.username = val));
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(EmailFormModalComponent, {
			width: "500px",
			data: { username: this.username }
		});

		dialogRef.afterClosed().subscribe((result: Email) => {
			if (result) {
				this.emailService.postEmail(result).subscribe();
			}
		});
	}
}
