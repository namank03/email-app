import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RxjsRoutingModule } from "./rxjs-routing.module";
import { HomeComponent } from "./home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [HomeComponent],
	imports: [CommonModule, RxjsRoutingModule, ReactiveFormsModule, FormsModule]
})
export class RxjsModule {}
