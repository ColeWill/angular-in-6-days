import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "src/app/models/product";
import { CartService } from "src/app/cart/cart.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackbar: MatSnackBar
  ) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open(`${product.name} added to Cart`, "", {
          duration: 2000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
      },
    });
  }
}
