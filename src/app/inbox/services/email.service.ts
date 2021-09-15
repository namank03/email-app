import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface EmailSummary {
	from: string;
	id: string;
	subject: string;
}

interface Email {
	from: string;
	html: string;
	id: string;
	subject: string;
	text: string;
}

@Injectable({
	providedIn: "root"
})
export class EmailService {
	rootURL = "https://api.angular-email.com";

	constructor(private http: HttpClient) {}

	getEmail(id: string): Observable<Email> {
		return this.http.get<Email>(`${this.rootURL}/emails/${id}`);
	}

	getEmails(): Observable<EmailSummary[]> {
		return this.http.get<EmailSummary[]>(`${this.rootURL}/emails`);
	}
}
