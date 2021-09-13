import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { distinctUntilChanged, switchMap } from "rxjs/operators";
import { Post, RxjsService } from "../services/rxjs.service";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
	selectedId = new Subject<number>();

	selectedPost$!: Observable<Post>;
	projects$: Observable<Post[]>;

	post!: Post;

	rxjsForm = new FormGroup({
		postId: new FormControl(1)
	});

	constructor(private rxjsService: RxjsService) {
		this.projects$ = this.rxjsService.getPosts();
	}

	ngOnInit(): void {
		console.log("Initialized");
		this.selectedId
			.pipe(
				distinctUntilChanged(),
				switchMap((val) => this.rxjsService.getPost(val))
			)
			.subscribe((val) => {
				this.post = val;
			});
	}

	get postId(): FormControl {
		return this.rxjsForm.get("postId") as FormControl;
	}

	onSubmit() {
		console.log("form value", this.rxjsForm.value);
	}
}
