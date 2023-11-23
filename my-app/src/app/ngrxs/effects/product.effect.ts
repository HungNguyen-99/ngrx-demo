import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "../actions/product.action";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class ProductEffect {
    loadProduct$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadProducts),
            mergeMap(() =>
                this.productService.getProducts().pipe(
                    map(products => loadProductsSuccess({ products })),
                    catchError(error => of(loadProductsFailure({ error })))
                )
            )
        )
    );

    constructor(
        private action$: Actions,
        private productService: ProductService
    ) { }
}