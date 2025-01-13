import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + "/products";
  getProducts(): Observable<Product[]> {
    console.log('Fetching products from API:', this.apiUrl);
    return this.http.get<Product[]>(this.apiUrl).pipe(
      tap((data) => console.log('Received products:', data))
    );
  }
}
