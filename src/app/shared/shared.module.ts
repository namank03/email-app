import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { MaterialModule } from "../material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [InputComponent],
	imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
	exports: [InputComponent]
})
export class SharedModule {}
