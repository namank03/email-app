import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { BehaviorSubject, interval } from "rxjs";
import { throttleTime } from "rxjs/operators";
import { ChildComponent } from "../child/child.component";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	@ViewChild("test") test_naman!: ElementRef<HTMLElement>;

	@ViewChild("app-child") childComp!: ChildComponent;

	currentCount = new BehaviorSubject<number>(0);

	count = 0;
	numberInterval$ = interval(500).pipe(
		// tap((val) => console.log("before", val)),
		throttleTime(1000)
		// tap((val) => console.log("after", val))
	);

	ngOnInit(): void {
		this.test_naman.nativeElement;
	}

	ngAfterViewInit() {}
}
