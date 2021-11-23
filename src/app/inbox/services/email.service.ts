import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface EmailSummary {
	from: string;
	id: string;
	subject: string;
}

export interface Email {
	from: string;
	to: string;
	html?: string;
	id?: string;
	subject: string;
	text: string;
}

export interface EmailSendResponse {
	status: string;
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

	postEmail(email: Email): Observable<EmailSendResponse> {
		return this.http.post<EmailSendResponse>(`${this.rootURL}/emails`, email);
	}
}
