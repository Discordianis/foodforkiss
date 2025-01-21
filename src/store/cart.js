"use client"

import {makeAutoObservable} from "mobx";

class Cart {
    cartCount = 0;

    constructor() {
        makeAutoObservable(this)
    }
    incrementCartCount() {
        this.cartCount++
    }
    decrementCartCount() {
        this.cartCount--
    }
    removeAllCartCount() {
        this.cartCount = 0
    }
}

const cartCount = new Cart()
export default cartCount