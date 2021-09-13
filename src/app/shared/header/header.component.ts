import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
	@Input() singedIn$!: Observable<boolean | null>;
}
