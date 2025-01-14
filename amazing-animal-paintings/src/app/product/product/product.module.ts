import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from "@angular/flex-layout";
import { ProductListComponent } from "../product-list/product-list.component";

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, FlexModule, MatCardModule],
})
export class ProductModule {}
