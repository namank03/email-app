/* eslint-disable class-methods-use-this */
import { Injectable } from "@angular/core";
import { CanLoad, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { skipWhile, take, tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable({
	providedIn: "root"
})
export class AuthGuard implements CanLoad {
	constructor(private authService: AuthService, private router: Router) {}

	canLoad():
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		// Auth guard wants an observable to end before it returns the value but our BehaviorSubject Observable must not end. So, to achieve this behaviour take(1) is used
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return this.authService.singedIn$.pipe(
			skipWhile((val) => val === null),
			take(1),
			// now the above observable can emit either true or false as we're preventing it to emit any value if the val is null. so, we can check weather the value is true or false and based on that if the user is not authenticated, we can redirect him to the sign in page.
			tap((authenticated) => {
				// the below line will prevent the application crash in case the user is not authenticated
				if (!authenticated)
					this.router
						.navigateByUrl("/sign-in")
						.catch((err) => console.log(err));
			})
		);
	}
}
