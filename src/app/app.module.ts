import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHttpInterceptor } from "./auth/interceptor/auth-http-interceptor";
import { SharedModule } from "./shared/shared.module";
import { RxjsModule } from "./rxjs/rxjs.module";
import { RxjsHttpInterceptor } from "./rxjs/interceptors/rxjs-interceptor";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		// AuthModule,
		RxjsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		SharedModule,
		AppRoutingModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: RxjsHttpInterceptor,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
