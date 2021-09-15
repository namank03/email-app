import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RxjsRoutingModule } from "./rxjs-routing.module";
import { HomeComponent } from "./home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { ChildComponent } from './child/child.component';

@NgModule({
	declarations: [HomeComponent, ChildComponent],
	imports: [
		CommonModule,
		RxjsRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		MaterialModule
	]
})
export class RxjsModule {}
