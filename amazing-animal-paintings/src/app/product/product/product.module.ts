import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "src/app/models/product";

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ProductModule {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiUrl + "/products";
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
  
}
