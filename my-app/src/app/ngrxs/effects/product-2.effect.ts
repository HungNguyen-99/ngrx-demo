import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/services/product.service";
import { loadProduct2, loadProduct2Failure, loadProduct2Success } from "../actions/product-2.action";
import { catchError, map, mergeMap, of } from "rxjs";


@Injectable()
export class Product2Effect {

    loadProduct$ = createEffect(() =>
        this.action$.pipe(
            ofType(loadProduct2),
            mergeMap(() => {
                return this.productService.getProducts2().pipe(
                    map(products => {
                        return loadProduct2Success({ products })
                    }),
                    catchError(error => of(loadProduct2Failure({ error })))
                )
            })
        )
    )

    constructor(
        private action$: Actions,
        private productService: ProductService
    ) { }
}