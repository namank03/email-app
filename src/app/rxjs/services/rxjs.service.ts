import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface Post {
	id: number;
	title: string;
	author: string;
}

@Injectable({
	providedIn: "root"
})
export class RxjsService {
	constructor(private http: HttpClient) {}

	rootUrl = "http://localhost:3000";

	getPosts() {
		return this.http.get<Post[]>(`${this.rootUrl}/posts`);
	}

	getPost(postId: number) {
		return this.http.get<Post>(`${this.rootUrl}/posts/${postId}`);
	}
}
