import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "../product-list/product-list.component";

import { FlexModule } from "@angular/flex-layout";
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, FlexModule, MatCardModule, MatSnackBarModule],
})
export class ProductModule {}
