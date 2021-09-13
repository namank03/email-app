import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
	HttpEventType
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class RxjsHttpInterceptor implements HttpInterceptor {
	intercept = (
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> => {
		const modifiedReq = req.clone({ withCredentials: true });
		return next.handle(modifiedReq).pipe(
			tap((val) => {
				if (val.type === HttpEventType.Sent)
					console.log("request is sent to server");
				else if (val.type === HttpEventType.Response)
					console.log("Response is =", val);
			})
		);
	};
}
