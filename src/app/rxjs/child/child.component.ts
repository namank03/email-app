import { Component, Input, OnChanges, OnInit } from "@angular/core";

@Component({
	selector: "app-child",
	templateUrl: "./child.component.html",
	styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
	@Input() anushkaDumb: any;
	constructor() {}

	ngOnInit(): void {
		console.log("init hook");
	}

	ngOnChanges(): void {
		console.log("On Change hook", this.anushkaDumb);
	}
}
