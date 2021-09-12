import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";

interface SignupCredentials {
	username: string;
	password: string;
	passwordConfirmation: string;
}

interface SignInCredentials {
	username: string;
	password: string;
}

interface SignupResponse {
	username: string;
}

interface SignedInResponse {
	authenticated: boolean;
	username: string;
}

@Injectable({
	providedIn: "root"
})
export class AuthService {
	private singedIn = new BehaviorSubject<boolean | null>(null);

	// exposing the read-only part of the subject to our app
	singedIn$ = this.singedIn.asObservable();

	rootURL = "https://api.angular-email.com/auth";

	constructor(private http: HttpClient) {}

	getUsername(username: string) {
		return this.http.post(`${this.rootURL}/username`, {
			username
		});
	}

	addUser(credentials: SignupCredentials) {
		// in case of an error in the http request pipe-> tap will never be executed and we'll never emit the true value.
		return this.http
			.post<SignupResponse>(`${this.rootURL}/signup`, credentials)
			.pipe(tap(() => this.singedIn.next(true)));
	}

	checkAuth() {
		// The default behaviour of the browser is to discard all the cookies. If we want to save the token as the cookie we need to pass "{withCredentials: true}". But, there's a better alternative via http interceptors.
		return this.http.get<SignedInResponse>(`${this.rootURL}/signedin`).pipe(
			tap(({ authenticated }) => {
				this.singedIn.next(authenticated);
			})
		);
	}

	signOut() {
		return this.http.post<any>(`${this.rootURL}/signout`, {}).pipe(
			tap(() => {
				this.singedIn.next(false);
			})
		);
	}

	signIn(credentials: SignInCredentials) {
		return this.http
			.post<any>(`${this.rootURL}/signin`, credentials)
			.pipe(tap(() => this.singedIn.next(true)));
	}
}
