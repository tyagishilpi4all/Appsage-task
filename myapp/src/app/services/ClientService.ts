import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class DemoService {
    constructor(private http: HttpClient) {

    }
    serverCall() {
        return this.http.get('https://raw.githubusercontent.com/tyagishilpi4all/FakeData/master/data.json');
    }
}