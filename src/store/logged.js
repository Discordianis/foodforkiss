"use client"

import {makeAutoObservable} from "mobx";

class Logged {
    token = ''
    tokenLoading = true
    constructor() {
        makeAutoObservable(this)
    }
    getToken() {
        if (typeof window !== 'undefined') {
            const tokenLocal = localStorage.getItem('token')
            this.token = tokenLocal ? tokenLocal : ''
            this.tokenLoading = false
        }
    }
}

const logged = new Logged()

export default logged