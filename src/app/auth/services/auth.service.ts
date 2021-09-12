import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

export interface AddUserResponse {
	available: boolean;
}

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private isLoggedIn = new BehaviorSubject<string | null>(null);
	// exposing the readonly part of the subject
	private isLoggedIn$ = this.isLoggedIn.asObservable();

	rootURL = "https://api.angular-email.com/auth";

	constructor(private http: HttpClient) {}

	getUsername(username: string) {
		return this.http.post<AddUserResponse>(`${this.rootURL}/username`, {
			username
		});
	}

	addUser(credentials: any) {
		return this.http.post(`${this.rootURL}/signup`, credentials);
	}
}
