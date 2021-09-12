/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { AuthService } from "../services/auth.service";
import {
	catchError,
	delay,
	distinctUntilChanged,
	map,
	switchMap,
	tap
} from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class UniqueUsername implements AsyncValidator {
	constructor(private authService: AuthService) {}

	validate = (control: FormControl) => {
		return of(control.value).pipe(
			delay(500),
			distinctUntilChanged(),
			switchMap((val) => this.authService.getUsername(val)),
			map(() => null),
			catchError((err) => {
				if (err?.status === 0) return of({ noInternetConnection: true });
				else if (err?.error?.username) return of({ notUnique: true });
				else return of({ someUnknownError: true });
			})
		);
	};
}
