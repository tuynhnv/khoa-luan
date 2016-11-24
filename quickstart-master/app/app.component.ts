import { Component } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular Tuynh</h1>
            <button (click)="onGetUser()">Get User</button>
        <div id="response">Response: {{response}}</div>
    `
})
export class AppComponent {

    response: string;
    // onGetUser(){
    //     this.response='tuynh';
    // }
    
    lastName : string;
    firstName : string;

    constructor(public http: Http ){

    }
    onGetUser(){

        this.http.get('https://tracnghiem-sample.firebaseio.com/user.json').
        subscribe(response => {
            var data: any = response.json();

            console.log(response);

            this.firstName = data.firstname;
            this.lastName = data.lastname;

            console.log('firstName  :   '  + this.firstName);
            console.log('lastName   :   ' + this.lastName);

        });
    }

 }
