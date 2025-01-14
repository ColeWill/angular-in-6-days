import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "../product-list/product-list.component";

import { FlexModule } from "@angular/flex-layout";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, FlexModule, MatCardModule, MatSnackBarModule, MatInputModule, MatFormFieldModule],
})
export class ProductModule {}
