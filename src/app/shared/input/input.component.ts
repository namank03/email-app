import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
	selector: "app-input",
	templateUrl: "./input.component.html",
	styleUrls: ["./input.component.css"]
})
export class InputComponent {
	debug = false;
	@Input() label!: string;
	@Input() type = "text";
	@Input() control!: FormControl;
}
